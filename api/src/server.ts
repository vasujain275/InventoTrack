import Fastify from "fastify";
import adminRoutes from "./modules/admin/admin.route";
import { adminSchemas } from "./modules/admin/admin.schema";

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

  server.get("/v1/healthcheck", async () => ({ status: "OK" }));

  server.register(adminRoutes, { prefix: "v1/admins" });

  return server;
}

export default buildServer;
