import Fastify from "fastify";

function buildServer() {
  const server = Fastify({
    logger: {
      transport: {
        target: "pino-pretty",
      },
    },
  });

  server.get("/healthcheck", async function() {
    return { status: "OK" };
  });

  return server;
}

export default buildServer;
