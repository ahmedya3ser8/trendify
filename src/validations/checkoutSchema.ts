import z from "zod";

export const checkoutSchema = z.object({
  details: z.string().min(1, 'details is required'),
  phone: z.string().min(1, 'phone is required').regex(/^01[0125][0-9]{8}$/, 'accept only egyption phone'),
  city: z.string().min(1, 'city is required')
})

export type TCheckoutSchema = z.infer<typeof checkoutSchema>
