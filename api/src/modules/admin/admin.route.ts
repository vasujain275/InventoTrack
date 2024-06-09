import { FastifyInstance } from "fastify";
import registerAdminHandler from "./admin.controller";

async function adminRoutes(server: FastifyInstance) {
  server.post("/", registerAdminHandler);
}

export default adminRoutes;
