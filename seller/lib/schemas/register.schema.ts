import { z } from "zod";

export const RegisterSchema = z.object({
  firstName: z.string().min(2).max(50),
  lastName: z.string().min(2).max(50),
  email: z.string().email().max(50),
  password: z.string().min(8).max(50),
});

export type IRegisterSchema = z.infer<typeof RegisterSchema>;

export const RegisterSchemaDefault: IRegisterSchema = {
  firstName: "",
  email: "",
  password: "",
  lastName: "",
};
