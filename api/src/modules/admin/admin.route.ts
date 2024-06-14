import type { FastifyInstance } from "fastify";
import {
  registerAdminHandler,
  getAdminsHandler,
  getAdminByIdHandler,
  getAdminByEmailHandler,
} from "./admin.controller";
import { $ref } from "./admin.schema";

async function adminRoutes(server: FastifyInstance) {
  server.post(
    "/",
    {
      schema: {
        body: $ref("createAdminSchema"),
        response: {
          201: $ref("createAdminReplySchema"),
        },
      },
    },
    registerAdminHandler
  );
  server.get("/", getAdminsHandler);
  server.get("/:id", getAdminByIdHandler);
  server.get("/email/:email", getAdminByEmailHandler);
}

export default adminRoutes;
