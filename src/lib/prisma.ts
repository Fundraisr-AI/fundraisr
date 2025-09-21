import { PrismaClient } from "@prisma/client";
import configEnv from "@/config";

declare global {
  var prisma: PrismaClient | undefined;
}

const prisma = globalThis.prisma || new PrismaClient();

if (configEnv?.nextEnv !== "production") globalThis.prisma = prisma;

export default prisma;
