import { buildJsonSchemas } from "fastify-zod";
import { z } from "zod";

const adminCore = {
  email: z
    .string({
      required_error: "Email is required",
      invalid_type_error: "Email must be a string type",
    })
    .email(),
  name: z.string({
    required_error: "Name is required",
    invalid_type_error: "Name must be a string type",
  }),
};

const createAdminSchema = z.object({
  ...adminCore,
  password: z.string({
    required_error: "Password is required",
    invalid_type_error: "Password must be a string type",
  }),
});

const createAdminReplySchema = z.object({
  id: z.string().uuid(),
  ...adminCore,
});

export type CreateAdminInput = z.infer<typeof createAdminSchema>;

export const { schemas: adminSchemas, $ref } = buildJsonSchemas(
  {
    createAdminSchema,
    createAdminReplySchema,
  },
  { $id: "AdminSchema" }
);
