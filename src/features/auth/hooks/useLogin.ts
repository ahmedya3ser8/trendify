import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm, type SubmitHandler } from 'react-hook-form';
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

import { signin } from "@/features/auth";
import { loginSchema, type TLoginSchema } from "@/validations";

export interface JwtPayload {
  id: string
  name: string
  role: string
  iat: number
  exp: number
}


const useLogin = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm<TLoginSchema>({
    mode: 'onTouched',
    resolver: zodResolver(loginSchema)
  })
  const submitForm: SubmitHandler<TLoginSchema> = (formData) => {
    console.log(formData);
    mutateAsync(formData);
  }
  const { mutateAsync, isPending } = useMutation({
    mutationFn: signin,
    onSuccess: (res) => {
      console.log(res);
      if (res.message === 'success') {
        toast.success('Login successful! Welcome back.');
        localStorage.setItem('access_trendify_token', res.token);
        const decoded = jwtDecode<JwtPayload>(res.token);
        localStorage.setItem('userId', decoded.id);
        navigate('/');
      }
    },
    onError: (err) => toast.error(err.message)
  })
  return { register, handleSubmit, errors, submitForm, isPending }
}

export default useLogin;
