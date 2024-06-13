import * as argon2 from "argon2";

import prisma from "../../utils/prisma";
import type { CreateAdminInput } from "./admin.schema";

export default async function createAdmin(input: CreateAdminInput) {
  const { password, ...rest } = input;

  const hash = await argon2.hash(password);

  const admin = await prisma.admin.create({
    data: { ...rest, password: hash },
  });

  return admin;
}
