import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";

import { checkoutSchema, type TCheckoutSchema } from "@/validations";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { cashOrder, onlineOrder } from "../services/order.service";

const useCheckout = () => {
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
  const { mutateAsync: cashPayment, isPending: isCashPending } = useMutation({
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
  const { mutateAsync: onlinePayment, isPending: isOnlinePending } = useMutation({
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
  return { method, setMethod, register, handleSubmit, errors, submitForm, isCashPending, isOnlinePending }
}

export default useCheckout;
