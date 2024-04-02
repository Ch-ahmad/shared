import { z } from "zod";

export const userSignUpSchema = z.object({
  name: z.string("Name is required"),
  email: z.string("Email is required").email("Enter a valid email"),
  password: z.string("Password is required"),
});

export const userSignUpGoogle = z.object({
  name: z.string("Name is required"),
  email: z.string("Email is required").email("Enter a valid email"),
});
