import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(3).max(30),
  email: z.string().email(),
  phoneNumber: z.string().nullable(),
  message: z.string().nullable(),
});