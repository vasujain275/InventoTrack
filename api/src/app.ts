import buildServer from "./server"

const server = buildServer();

async function main() {
  await server.listen({
    port: process.env.PORT || 8069,
    host: "0.0.0.0",
  });

  ["SIGINT", "SIGTERM"].forEach((signal) => {
    process.on(signal, async () => {
      await server.close();

      process.exit(0);
    });
  });
}

main()
