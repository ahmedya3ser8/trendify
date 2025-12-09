import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm, type SubmitHandler } from 'react-hook-form';
import toast from "react-hot-toast";

import { verifyResetCode } from "@/features/auth";
import { verifyCodeSchema, type TVerifyCodeSchema } from "@/validations";

const useVerifyCode = (setSteps: React.Dispatch<React.SetStateAction<'forget' | 'otp' | 'reset'>>) => {
  const { register, handleSubmit, formState: { errors } } = useForm<TVerifyCodeSchema>({
    mode: 'onTouched',
    resolver: zodResolver(verifyCodeSchema)
  })
  const submitForm: SubmitHandler<TVerifyCodeSchema> = (formData) => {
    mutateAsync(formData);
  }
  const { mutateAsync, isPending } = useMutation({
    mutationFn: verifyResetCode,
    onSuccess: (res) => {
      if (res.status === 'Success') {
        toast.success('Email verified successfully!');
        setSteps('reset');
      }
    },
    onError: (err) => toast.error(err.message)
  })
  return { register, handleSubmit, errors, submitForm, isPending }
}

export default useVerifyCode;
