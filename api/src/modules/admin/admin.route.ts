import type { FastifyInstance } from "fastify";
import {
  registerAdminHandler,
  getAdminsHandler,
  getAdminByIdHandler,
  getAdminByEmailHandler,
  adminloginHandler,
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
  server.get(
    "/",
    {
      schema: {
        response: {
          200: $ref("getAdminsReplySchema"),
        },
      },
    },
    getAdminsHandler
  );
  server.get(
    "/:id",
    {
      schema: {
        response: {
          200: $ref("createAdminReplySchema"),
        },
      },
    },
    getAdminByIdHandler
  );
  server.get(
    "/email/:email",
    {
      schema: {
        response: {
          200: $ref("createAdminReplySchema"),
        },
      },
    },
    getAdminByEmailHandler
  );
  server.post(
    "/login",
    {
      schema: {
        body: $ref("loginAdminSchema"),
        response: {
          200: $ref("loginAdminReplySchema"),
        },
      },
    },
    adminloginHandler
  );
}

export default adminRoutes;
