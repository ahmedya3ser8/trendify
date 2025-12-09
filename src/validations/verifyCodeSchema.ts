import z from "zod"

export const verifyCodeSchema = z.object({
  resetCode: z.string().min(1, 'resetCode is required')
})

export type TVerifyCodeSchema = z.infer<typeof verifyCodeSchema>
