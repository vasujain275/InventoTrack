import prisma from "../../utils/prisma";
import type { CreateAdminInput } from "./admin.schema";
import { hashPassword } from "../../utils/passwords";

export async function createAdmin(input: CreateAdminInput) {
  const { password, ...rest } = input;

  const hash = await hashPassword(password);
  const admin = await prisma.admin.create({
    data: { ...rest, password: hash },
  });

  return admin;
}

export async function findAdminByEmail(email: string) {
  return await prisma.admin.findUnique({
    where: {
      email,
    },
  });
}
