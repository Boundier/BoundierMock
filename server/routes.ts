import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertWaitlistSchema } from "@shared/schema";
import { sendConfirmationEmail, sendAlreadyOnListEmail } from "./mailer";
import rateLimit from "express-rate-limit";
import { randomUUID } from "crypto";

const WAITLIST_RATE_LIMIT = Number(process.env.WAITLIST_RATE_LIMIT || 10); // requests per WINDOW_MS
const WAITLIST_RATE_WINDOW_MS = Number(process.env.WAITLIST_RATE_WINDOW_MS || 60_000); // 1 minute

const limiter = rateLimit({
  windowMs: WAITLIST_RATE_WINDOW_MS,
  max: WAITLIST_RATE_LIMIT,
  standardHeaders: true,
  legacyHeaders: false,
});

function isDisposableEmail(email: string) {
  // Very small disposable domain check for prototype. Replace with a better list or service.
  const disposableDomains = ["mailinator.com", "10minutemail.com", "tempmail.com", "dispostable.com"];
  try {
    const domain = email.split("@").pop()?.toLowerCase() || "";
    return disposableDomains.includes(domain);
  } catch {
    return false;
  }
}

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/waitlist", limiter, async (req, res) => {
    try {
      const validatedData = insertWaitlistSchema.parse(req.body);

      // Spam check: simple disposable domain block
      if (isDisposableEmail(validatedData.email)) {
        return res.status(400).json({ error: "Disposable email addresses are not allowed" });
      }

      const existing = await storage.getWaitlistByEmail(validatedData.email);
      if (existing) {
        // Optionally send an email with unsubscribe link
        const unsubUrl = `${process.env.FRONTEND_URL || "http://localhost:5173"}/api/waitlist/unsubscribe?token=${existing.unsub_token}`;
        try {
          await sendAlreadyOnListEmail(validatedData.email, unsubUrl);
        } catch (err) {
          console.warn("Failed to send already-on-list email:", err);
        }
        return res.status(400).json({ error: "Email already on waitlist" });
      }

      const confirmToken = randomUUID();
      const unsubToken = randomUUID();
      const entry = await storage.addToWaitlist({ email: validatedData.email, confirm_token: confirmToken, unsub_token: unsubToken });
      
      // send confirmation email (best-effort)
      const confirmUrl = `${process.env.FRONTEND_URL || "http://localhost:5173"}/api/waitlist/confirm?token=${confirmToken}`;
      const unsubUrl = `${process.env.FRONTEND_URL || "http://localhost:5173"}/api/waitlist/unsubscribe?token=${unsubToken}`;
      try {
        await sendConfirmationEmail(validatedData.email, confirmUrl, unsubUrl);
      } catch (err) {
        console.warn("Failed to send confirmation email:", err);
      }

      res.status(201).json({ id: entry.id, email: entry.email, createdAt: entry.createdAt });
    } catch (error) {
  console.error("ACTUAL ERROR:", error);
  console.error("ERROR MESSAGE:", error?.message);
  console.error("ERROR STACK:", error?.stack);
  console.log("REQUEST BODY:", req.body);
  res.status(400).json({ error: "Invalid email format" });
    }

  });

  app.get("/api/waitlist/confirm", async (req, res) => {
    const token = String(req.query.token || "");
    if (!token) return res.status(400).send("Missing token");

    const updated = await storage.confirmWaitlistByToken(token);
    if (!updated) return res.status(404).send("Token not found");
    // Could render a simple HTML success page or redirect to frontend
    res.status(200).send("Email confirmed — thanks!");
  });

  app.get("/api/waitlist/unsubscribe", async (req, res) => {
    const token = String(req.query.token || "");
    if (!token) return res.status(400).send("Missing token");

    const ok = await storage.unsubscribeByToken(token);
    if (!ok) return res.status(404).send("Token not found");
    res.status(200).send("You have been unsubscribed.");
  });

  // Admin listing (prototype): requires X-ADMIN-TOKEN header equal to ADMIN_TOKEN env var
  app.get("/api/admin/waitlist", async (req, res) => {
    const adminToken = process.env.ADMIN_TOKEN;
    if (!adminToken) return res.status(500).json({ error: "Admin interface not configured" });
    const provided = req.header("x-admin-token");
    if (provided !== adminToken) return res.status(401).json({ error: "Unauthorized" });

    const list = await storage.listWaitlist();
    res.json(list);
  });

  const httpServer = createServer(app);

  return httpServer;
}
