import z from "zod"

export const resetPassSchema = z.object({
  email: z.string().min(1, 'email is required').email(),
  newPassword: z.string().min(1, 'newPassword is required').regex(/^[A-Z][a-z0-9@#$]{8,}$/, ' '),
})

export type TResetPassSchema = z.infer<typeof resetPassSchema>
