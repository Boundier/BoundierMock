import { type User, type InsertUser, type Waitlist, type InsertWaitlist, waitlist as waitlistTable } from "@shared/schema";
import { randomUUID } from "crypto";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  addToWaitlist(data: InsertWaitlist & { confirm_token?: string; unsub_token?: string }): Promise<Waitlist>;
  getWaitlistByEmail(email: string): Promise<Waitlist | undefined>;
  confirmWaitlistByToken(token: string): Promise<Waitlist | undefined>;
  unsubscribeByToken(token: string): Promise<boolean>;
  listWaitlist(): Promise<Waitlist[]>;
}

// Keep basic in-memory user storage for prototype (or you can move users to DB)
const inMemoryUsers: Map<string, User> = new Map();

export class Storage implements IStorage {
  async getUser(id: string): Promise<User | undefined> {
    return inMemoryUsers.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(inMemoryUsers.values()).find((u) => u.username === username);
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    inMemoryUsers.set(id, user);
    return user;
  }

  // DB-backed waitlist methods
  async addToWaitlist(data: InsertWaitlist & { confirm_token?: string; unsub_token?: string }): Promise<Waitlist> {
    const tokenConfirm = data.confirm_token ?? randomUUID();
    const tokenUnsub = data.unsub_token ?? randomUUID();
    const insert = await db.insert(waitlistTable).values({
      email: data.email,
      confirm_token: tokenConfirm,
      unsub_token: tokenUnsub,
      confirmed: false,
    }).returning();
    return insert[0] as Waitlist;
  }

  async getWaitlistByEmail(email: string): Promise<Waitlist | undefined> {
    const rows = await db.select().from(waitlistTable).where(eq(waitlistTable.email, email));
    return rows[0] as Waitlist | undefined;
  }

  async confirmWaitlistByToken(token: string): Promise<Waitlist | undefined> {
    const rows = await db.select().from(waitlistTable).where(eq(waitlistTable.confirm_token, token));
    const entry = rows[0] as Waitlist | undefined;
    if (!entry) return undefined;
    await db.update(waitlistTable).set({ confirmed: true }).where(eq(waitlistTable.id, entry.id));
    const updated = await db.select().from(waitlistTable).where(eq(waitlistTable.id, entry.id));
    return updated[0] as Waitlist;
  }

  async unsubscribeByToken(token: string): Promise<boolean> {
    const rows = await db.select().from(waitlistTable).where(eq(waitlistTable.unsub_token, token));
    const entry = rows[0] as Waitlist | undefined;
    if (!entry) return false;
    await db.delete(waitlistTable).where(eq(waitlistTable.id, entry.id));
    return true;
  }

  async listWaitlist(): Promise<Waitlist[]> {
    const rows = await db.select().from(waitlistTable).orderBy(waitlistTable.createdAt);
    return rows as Waitlist[];
  }
}

export const storage = new Storage();
