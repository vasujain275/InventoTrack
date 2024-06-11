import Fastify from "fastify";
import adminRoutes from "./modules/admin/admin.route";

function buildServer() {
  const server = Fastify({
    logger: {
      transport: {
        target: "pino-pretty",
      },
    },
  });

  server.get("/v1/healthcheck", async function () {
    return { status: "OK" };
  });

  server.register(adminRoutes, { prefix: "v1/admins" });

  return server;
}

export default buildServer;
