import { z } from "zod";

export const AuthenticateSchema = z.object({
  email: z.string().email().max(50),
  password: z.string().min(8).max(50),
});

export type IAuthenticateSchema = z.infer<typeof AuthenticateSchema>;

export const AuthenticateSchemaDefault: IAuthenticateSchema = {
  email: "",
  password: "",
};
