import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertWaitlistSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/waitlist", async (req, res) => {
    try {
      const validatedData = insertWaitlistSchema.parse(req.body);
      
      const existing = await storage.getWaitlistByEmail(validatedData.email);
      if (existing) {
        return res.status(400).json({ error: "Email already on waitlist" });
      }

      const entry = await storage.addToWaitlist(validatedData);
      res.status(201).json(entry);
    } catch (error) {
      res.status(400).json({ error: "Invalid email format" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
