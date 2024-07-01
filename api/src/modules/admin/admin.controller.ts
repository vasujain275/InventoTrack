import type { FastifyReply, FastifyRequest } from "fastify";
import { createAdmin, findAdminByEmail } from "./admin.service";
import type { CreateAdminInput, LoginAdminSInput } from "./admin.schema";
import prisma from "../../utils/prisma";
import { verifyPassword } from "../../utils/passwords";
import { server } from "../../app";

async function registerAdminHandler(
  request: FastifyRequest<{
    Body: CreateAdminInput;
  }>,
  reply: FastifyReply
) {
  const input = request.body;
  try {
    const admin = await createAdmin(input);
    return reply.code(201).send(admin);
  } catch (e) {
    console.log(e);
    return reply.code(500);
  }
}

async function getAdminsHandler(request: FastifyRequest, reply: FastifyReply) {
  try {
    const admins = await prisma.admin.findMany();
    return reply.code(200).send(admins);
  } catch (e) {
    console.log(e);
    return reply.code(500);
  }
}

async function getAdminByIdHandler(
  request: FastifyRequest<{
    Params: {
      id: string;
    };
  }>,
  reply: FastifyReply
) {
  const id = request.params.id;
  try {
    const admin = await prisma.admin.findUnique({
      where: {
        id,
      },
    });
    return reply.code(200).send(admin);
  } catch (e) {
    console.log(e);
    return reply.code(500);
  }
}

async function getAdminByEmailHandler(
  request: FastifyRequest<{
    Params: {
      email: string;
    };
  }>,
  reply: FastifyReply
) {
  const email = request.params.email;
  try {
    const admin = await findAdminByEmail(email);
    return reply.code(200).send(admin);
  } catch (e) {
    console.log(e);
    return reply.code(500);
  }
}

async function adminloginHandler(
  request: FastifyRequest<{
    Body: LoginAdminSInput;
  }>,
  reply: FastifyReply
) {
  const { email, password } = request.body;
  const admin = findAdminByEmail(email);

  if (!admin) {
    return reply.code(401).send({
      message: "Invalid Email or Password",
    });
  }

  const adminData = await admin;
  const hash = adminData?.password;

  if (!hash) {
    return reply.code(401).send({
      message: "Error Fetching the data",
    });
  }

  const correctPassword = verifyPassword(hash, password);

  if (!correctPassword) {
    return reply.code(401).send({
      message: "Invalid Email or Password",
    });
  }

  const accessToken = server.jwt.sign({
    email,
    password,
  });

  return reply.code(200).send({
    accessToken,
  });
}

export {
  getAdminsHandler,
  registerAdminHandler,
  getAdminByIdHandler,
  getAdminByEmailHandler,
  adminloginHandler,
};
