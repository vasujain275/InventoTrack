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

const getAdminsReplySchema = z.array(createAdminReplySchema);

const loginAdminSchema = z.object({
  email: z
    .string({
      required_error: "Email is required",
      invalid_type_error: "Email must be a string type",
    })
    .email(),
  password: z.string({
    required_error: "Password is required",
    invalid_type_error: "Password must be a string type",
  }),
});

const loginAdminReplySchema = z.object({
  accessToken: z.string(),
});

export type CreateAdminInput = z.infer<typeof createAdminSchema>;
export type LoginAdminSInput = z.infer<typeof loginAdminSchema>;

export const { schemas: adminSchemas, $ref } = buildJsonSchemas(
  {
    createAdminSchema,
    createAdminReplySchema,
    getAdminsReplySchema,
    loginAdminReplySchema,
    loginAdminSchema,
  },
  { $id: "AdminSchema" }
);
