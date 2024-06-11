import { FastifyInstance } from "fastify";
import {
  registerAdminHandler,
  getAdminsHandler,
  getAdminByIdHandler,
  getAdminByEmailHandler,
} from "./admin.controller";

async function adminRoutes(server: FastifyInstance) {
  server.post("/", registerAdminHandler);
  server.get("/", getAdminsHandler);
  server.get("/:id", getAdminByIdHandler);
  server.get("/email/:email", getAdminByEmailHandler);
}

export default adminRoutes;
