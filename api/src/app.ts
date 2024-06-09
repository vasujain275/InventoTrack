import buildServer from "./server";
import adminRoutes from "./modules/admin/admin.route";

const server = buildServer();

async function main() {
  await server.listen({
    port: 8069,
    host: "0.0.0.0",
  });

  ["SIGINT", "SIGTERM"].forEach((signal) => {
    process.on(signal, async () => {
      await server.close();

      process.exit(0);
    });
  });
}

main();
