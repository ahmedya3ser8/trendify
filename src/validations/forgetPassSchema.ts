import z from "zod"

export const forgetSchema = z.object({
  email: z.string().min(1, 'email is required').email()
})

export type TForgetSchema = z.infer<typeof forgetSchema>

