import z from "zod";
import ContactTitle from "./ContactTitle";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputForm } from "@/features/auth";
import styles from './styles.module.css'

const contactSchema = z.object({
  firstName: z.string().min(1, 'firstName is required'),
  lastName: z.string().min(1, 'lastName is required'),
  email: z.string().min(1, 'email is required').email(),
  phoneNumber: z.string().min(1, 'phoneNumber is required').regex(/^01[0125][0-9]{8}$/, 'accept only egyption phone'),
  subject: z.string().min(1, 'subject is required'),
  message: z.string().min(1, 'message is required')
})

type TContactSchema = z.infer<typeof contactSchema>

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<TContactSchema>({
    mode: 'onTouched',
    resolver: zodResolver(contactSchema)
  })
  const submitForm: SubmitHandler<TContactSchema> = (formData) => {
    console.log(formData);
  }
  return (
    <section className="pb-10">
      <div className="container">
        <ContactTitle />
        <form onSubmit={handleSubmit(submitForm)} className="flex flex-col gap-4 max-w-3xl mt-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <InputForm 
              id="firstName" 
              label="First Name" 
              register={register} 
              name="firstName" 
              error={errors.firstName?.message as string} 
              type="text" 
            />
            <InputForm 
              id="firstName" 
              label="Last Name" 
              register={register} 
              name="lastName" 
              error={errors.lastName?.message as string} 
              type="text" 
            />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <InputForm 
              id="email" 
              label="Email" 
              register={register} 
              name="email" 
              error={errors.email?.message as string} 
              type="email" 
            />
            <InputForm 
              id="phoneNumber" 
              label="Phone Number" 
              register={register} 
              name="phoneNumber" 
              error={errors.phoneNumber?.message as string} 
              type="tel" 
            />
          </div>
          <InputForm 
            id="subject" 
            label="Subject" 
            register={register} 
            name="subject" 
            error={errors.subject?.message as string} 
            type="text" 
          />
          <div className="floating_label_group">
            <textarea id="message" {...register('message')} className={`floating_input h-[110px]! resize-none ${errors.message?.message && 'border-red-500!'}`} placeholder=" "></textarea>
            <label htmlFor="message" className={`floating_label ${styles.floating_label} ${errors.message?.message && 'text-red-500!'}`}> Message </label>
            <p className="text-sm text-red-500 lowercase mt-1"> {errors.message?.message} </p>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="acceptTerms" className="accent-main size-5" />
            <label htmlFor="acceptTerms" className="cursor-pointer select-none">I accept the terms</label>
          </div>
          <button type="submit" className="btn_primary"> Submit </button>
        </form>
      </div>
    </section>
  )
}

export default ContactForm;
