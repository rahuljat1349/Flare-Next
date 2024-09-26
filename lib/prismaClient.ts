import { PrismaClient } from "@prisma/client";

declare global {
  // This prevents TypeScript errors when hot-reloading
  var prisma: PrismaClient | undefined;
}

// Use a global variable in development to avoid re-instantiating PrismaClient
const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV === "development") {
  global.prisma = prisma;
}

export default prisma;
