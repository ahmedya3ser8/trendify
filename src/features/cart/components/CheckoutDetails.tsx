import { InputForm } from "@/features/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import z from "zod";
import { cashOrder, onlineOrder } from "../services/order.service";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

const checkoutSchema = z.object({
  details: z.string().min(1, 'details is required'),
  phone: z.string().min(1, 'phone is required').regex(/^01[0125][0-9]{8}$/, 'accept only egyption phone'),
  city: z.string().min(1, 'city is required')
})

export type TCheckoutSchema = z.infer<typeof checkoutSchema>

const CheckoutDetails = () => {
  const { cartId } = useParams();
  const navigate = useNavigate();
  const [method, setMethod] = useState<'cash' | 'online'>('online');
  const { register, handleSubmit, formState: { errors } } = useForm<TCheckoutSchema>({
    mode: 'onTouched',
    resolver: zodResolver(checkoutSchema)
  })
  const submitForm: SubmitHandler<TCheckoutSchema> = (formData) => {
    console.log(formData);
    if (method === 'cash') cashPayment({ cartId: cartId!, formData })
    else if (method === 'online') onlinePayment({ cartId: cartId!, formData })
  }
  const { mutateAsync: cashPayment } = useMutation({
    mutationFn: cashOrder,
    onSuccess: (res) => {
      console.log(res)
      if (res.status === "success") {
        navigate('/allorders');
        toast.success('thank you! Your order was successful.');
      }
    },
    onError: (err) => {
      toast.error(err.message);
    }
  })
  const { mutateAsync: onlinePayment } = useMutation({
    mutationFn: onlineOrder,
    onSuccess: (res) => {
      console.log(res)
      toast.success('redirecting you to our secure payment provider... Please wait.');
      if (res.status === "success") {
        open(res.session.url, '_self');
      }
    },
    onError: (err) => {
      toast.error(err.message);
    }
  })
  return (
    <section>
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-5">

          <div className="flex-1 bg-white border border-gray-300 rounded-lg p-4 flex flex-col gap-5">
            <h2 className="text-secondary text-2xl font-semibold"> Delivery Address </h2>
            <form className="flex flex-col gap-4">
              <div className="input_form">
                <div className="floating_label_group">
                  <textarea className={`floating_input h-[120px]! resize-none ${errors.details?.message ? 'border-red-500! shadow-none!' : '' }`} {...register('details')} placeholder=" " id="details"></textarea>
                  <label className={`floating_label ${errors.details?.message ? 'text-red-500!' : '' }`} htmlFor="details"> Details </label>
                </div>
                <p className="text-sm text-red-500 lowercase mt-1"> {errors.details?.message} </p>
              </div>
              <InputForm 
                id="phone" 
                label="Phone Number" 
                register={register} 
                name="phone" 
                error={errors.phone?.message as string} 
                type="tel" 
              />
              <InputForm 
                id="city" 
                label="City" 
                register={register} 
                name="city" 
                error={errors.city?.message as string} 
                type="text" 
              />
            </form>
            <h2 className="text-secondary text-2xl font-semibold"> Delivery Method </h2>
            <div className="flex items-center gap-3 border border-gray-300 h-14 rounded-lg px-4 transition duration-300 has-[input:checked]:border-secondary">
              <input type="radio" onChange={() => setMethod('online')} checked={method === 'online'} name="paymentMethod" id="onlinePayment" className="size-6 accent-secondary peer" />
              <label htmlFor="onlinePayment" className="w-full h-full flex items-center cursor-pointer peer-checked:text-secondary"> Online Payment </label>
            </div>
            <div className="flex items-center gap-3 border border-gray-300 h-14 rounded-lg px-4 transition duration-300 has-[input:checked]:border-secondary">
              <input type="radio" onChange={() => setMethod('cash')} checked={method === 'cash'} name="paymentMethod" id="cashPayment" className="size-6 accent-secondary peer" />
              <label htmlFor="cashPayment" className="w-full h-full flex items-center cursor-pointer peer-checked:text-secondary"> Cash Payment </label>
            </div>
          </div>

          <div className="flex flex-col gap-4 bg-white border border-gray-300 rounded-lg p-4 lg:w-xs xl:w-sm h-fit">
            <h3 className="text-2xl text-secondary">Order Summary</h3>
            <ul className="flex flex-col gap-2 border-b border-gray-300 pb-3">
              <li className="flex justify-between">
                <span className="text-lg text-secondary">Price</span>
                <span className="text-lg text-secondary"> 0 EGP</span>
              </li>
              <li className="flex justify-between">
                <span className="text-lg text-secondary">Shipping</span>
                <span className="text-lg text-main">Free</span>
              </li>
              <li className="flex justify-between">
                <span className="text-lg text-secondary">Coupon Applied</span>
                <span className="text-lg text-secondary">0.00EGP</span>
              </li>
            </ul>
            <ul className="flex flex-col gap-2 border-b border-gray-300 pb-3">
              <li className="flex justify-between">
                <span className="text-lg text-secondary">Total</span>
                <span className="text-lg text-secondary"> 0 EGP</span>
              </li>
              <li className="flex justify-between">
                <span className="text-lg text-secondary">Estimated Delivery by</span>
                <span className="text-lg text-secondary">18 Dec, 2025</span>
              </li>
            </ul>
            <div className="coupon border border-gray-300 p-2 flex rounded-lg">
              <input type="text" className="w-full outline-none" placeholder="Coupon Code" />
              <button className="bg-main text-white px-4 py-2 rounded-lg"> apply </button>
            </div>
            <button type="button" onClick={handleSubmit(submitForm)} className="btn_primary flex justify-center items-center"> Payment </button>
          </div>

        </div>
      </div>
    </section>
  )
}

export default CheckoutDetails;
