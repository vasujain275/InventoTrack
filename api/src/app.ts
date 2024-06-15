import buildServer from "./server";
import { port } from "./utils/constants";

export const server = buildServer();

async function main() {
  await server.listen({
    port: port,
    host: "0.0.0.0",
  });

  for (const signal of ["SIGINT", "SIGTERM"]) {
    process.on(signal, async () => {
      await server.close();
      process.exit(0);
    });
  }
}

main();
