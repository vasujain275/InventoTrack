import { FastifyReply, FastifyRequest } from "fastify";
import createAdmin from "./admin.service";
import { CreateAdminInput } from "./admin.schema";

export default async function registerAdminHandler(
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
