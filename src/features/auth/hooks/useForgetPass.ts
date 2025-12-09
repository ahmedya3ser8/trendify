import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm, type SubmitHandler } from 'react-hook-form';
import toast from "react-hot-toast";

import { forgotPassword } from "@/features/auth";
import { forgetSchema, type TForgetSchema } from "@/validations";

const useForgetPass = (
  setSteps: React.Dispatch<React.SetStateAction<'forget' | 'otp' | 'reset'>>,
  setEmail: React.Dispatch<React.SetStateAction<string>>
) => {
  const { register, handleSubmit, formState: { errors } } = useForm<TForgetSchema>({
    mode: 'onTouched',
    resolver: zodResolver(forgetSchema)
  })
  const submitForm: SubmitHandler<TForgetSchema> = (formData) => {
    mutateAsync(formData);
  }
  const { mutateAsync, isPending } = useMutation({
    mutationFn: forgotPassword,
    onSuccess: (res, variables) => {
      if (res.statusMsg === 'success') {
        toast.success(res.message);
        setEmail(variables.email)
        setSteps('otp');
      }
    },
    onError: (err) => toast.error(err.message)
  })
  return { register, handleSubmit, errors, submitForm, isPending }
}

export default useForgetPass;
