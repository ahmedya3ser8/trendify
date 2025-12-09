import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm, type SubmitHandler } from 'react-hook-form';
import toast from "react-hot-toast";

import { resetPassword } from "@/features/auth";
import { resetPassSchema, type TResetPassSchema } from "@/validations";

const useResetPass = (email: string) => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm<TResetPassSchema>({
    mode: 'onTouched',
    resolver: zodResolver(resetPassSchema),
    defaultValues: { email }
  })
  const submitForm: SubmitHandler<TResetPassSchema> = (formData) => {
    mutateAsync(formData);
  }
  const { mutateAsync, isPending } = useMutation({
    mutationFn: resetPassword,
    onSuccess: (res) => {
      toast.success('Password reset completed successfully.');
      localStorage.setItem('access_trendify_token', res.token);
      navigate('/');
    },
    onError: (err) => toast.error(err.message)
  })
  return { register, handleSubmit, errors, submitForm, isPending }
}

export default useResetPass;
