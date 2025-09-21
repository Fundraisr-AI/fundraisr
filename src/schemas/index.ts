import { z } from "zod";
export const loginFormSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export const resetFormSchema = z.object({
  email: z.string().email(),
});

export const newPasswordSchema = z.object({
  password: z.string(),
});
