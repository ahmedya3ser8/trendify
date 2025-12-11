import z from "zod"

export const contactSchema = z.object({
  firstName: z.string().min(1, 'firstName is required'),
  lastName: z.string().min(1, 'lastName is required'),
  email: z.string().min(1, 'email is required').email(),
  phoneNumber: z.string().min(1, 'phoneNumber is required').regex(/^01[0125][0-9]{8}$/, 'accept only egyption phone'),
  subject: z.string().min(1, 'subject is required'),
  message: z.string().min(1, 'message is required')
})

export type TContactSchema = z.infer<typeof contactSchema>
