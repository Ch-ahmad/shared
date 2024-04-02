import { z } from 'zod';

export const signInSchema = z.object({
  email: z.string().min(1, 'Email is required!').email(),
  password: z.string().min(1, 'Password is required!'),
});

export const signUpSchema = z.object({
  email: z.string().min(1, 'Email is required!').email(),
  password: z.string().min(1, 'Password is required!'),
  name: z.string().min(1, 'Name is required!'),
});

export const updateProfileSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  password: z.string().min(6, 'Password must be 6 character long'),
});
