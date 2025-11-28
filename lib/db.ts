import { PrismaClient } from "@prisma/client";
import { withAccelerate } from "@prisma/extension-accelerate";

declare global {
  var prisma: ReturnType<typeof createPrismaClient> | undefined;
  var prismaBase: PrismaClient | undefined;
}

const createPrismaClient = () => new PrismaClient().$extends(withAccelerate());

// Base client for adapters (without extensions)
export const prismaBase = globalThis.prismaBase || new PrismaClient();

// Extended client for queries (with Accelerate)
export const db = globalThis.prisma || createPrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = db;
  globalThis.prismaBase = prismaBase;
}
