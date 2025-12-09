import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm, type SubmitHandler } from 'react-hook-form';
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import { signup } from "@/features/auth";
import { registerSchema, type TRegisterSchema } from "@/validations";

const useRegister = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm<TRegisterSchema>({
    mode: 'onTouched',
    resolver: zodResolver(registerSchema)
  })
  const submitForm: SubmitHandler<TRegisterSchema> = (formData) => {
    console.log(formData);
    mutateAsync(formData);
  }
  const { mutateAsync, isPending } = useMutation({
    mutationFn: signup,
    onSuccess: (res) => {
      console.log(res);
      if (res.message === 'success') {
        toast.success('Account created successfully!');
        navigate('/auth/login');
      }
    },
    onError: (err) => toast.error(err.message)
  })
  return { register, handleSubmit, errors, submitForm, isPending }
}

export default useRegister;
