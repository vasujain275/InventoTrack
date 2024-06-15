import Fastify, { FastifyRequest, FastifyReply } from "fastify";
import fjwt from "@fastify/jwt";
import adminRoutes from "./modules/admin/admin.route";
import { adminSchemas } from "./modules/admin/admin.schema";
import { jwtSecretKey } from "./utils/constants";

function buildServer() {
  const server = Fastify({
    logger: {
      transport: {
        target: "pino-pretty",
      },
    },
  });
  for (const schema of adminSchemas) {
    server.addSchema(schema);
  }

  server.register(fjwt, {
    secret: jwtSecretKey,
  });

  server.decorate(
    "auth",
    async (request: FastifyRequest, reply: FastifyReply) => {
      try {
        await request.jwtVerify;
      } catch (e) {
        return reply.send(e);
      }
    }
  );

  server.get("/v1/healthcheck", async () => ({ status: "OK" }));

  server.register(adminRoutes, { prefix: "v1/admins" });

  return server;
}

export default buildServer;
