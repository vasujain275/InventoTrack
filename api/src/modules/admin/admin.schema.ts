import { z } from "zod";

const createAdminSchema = z.object({
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
  password: z.string({
    required_error: "Password is required",
    invalid_type_error: "Password must be a string type",
  }),
});

export type CreateAdminInput = z.infer<typeof createAdminSchema>;
