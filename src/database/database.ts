import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default prisma;

console.log("conexão com banco estabelecida!")