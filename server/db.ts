import { Pool } from "pg";
import { drizzle } from "drizzle-orm/node-postgres";
import { env } from "process";

const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
  throw new Error("DATABASE_URL environment variable is required");
}

export const pool = new Pool({
  connectionString,
});

export const db = drizzle(pool);
