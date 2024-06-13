import type { FastifyReply, FastifyRequest } from "fastify";
import createAdmin from "./admin.service";
import type { CreateAdminInput } from "./admin.schema";
import prisma from "../../utils/prisma";

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
    const admin = await prisma.admin.findUnique({
      where: {
        email: email,
      },
    });
    return reply.code(200).send(admin);
  } catch (e) {
    console.log(e);
    return reply.code(500);
  }
}

export {
  getAdminsHandler,
  registerAdminHandler,
  getAdminByIdHandler,
  getAdminByEmailHandler,
};
