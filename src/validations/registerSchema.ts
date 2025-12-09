import z from "zod"

export const registerSchema = z.object({
  name: z.string().min(1, 'name is required'),
  email: z.string().min(1, 'email is required').email(),
  password: z.string().min(1, 'password is required').regex(/^[A-Z][a-z0-9@#$]{8,}$/, ' '),
  rePassword: z.string().min(1, 'confirm password is required'),
  phone: z.string().min(1, 'Phone number is required').regex(/^01[0125][0-9]{8}$/, 'accept only egypt phone')
}).refine(input => input.password === input.rePassword, {
  error: 'password and confirm password dose not match',
  path: ['rePassword']
})

export type TRegisterSchema = z.infer<typeof registerSchema>
