import { Link } from "react-router-dom";

import { AuthHeader, InputForm, useLogin } from "@/features/auth";
import { LuLoader } from "react-icons/lu";

const LoginForm = () => {
  const { register, handleSubmit, errors, submitForm, isPending } = useLogin();
  return (
    <div className="col container">
      <AuthHeader title="Welcome Back!" description="Please log in or sign up to continue using our app." />
      <form onSubmit={handleSubmit(submitForm)} className="flex flex-col gap-4 mt-6 md:mt-8 mb-4">
        <InputForm 
          id="email" 
          label="Email" 
          register={register} 
          name="email" 
          error={errors.email?.message as string} 
          type="email" 
        />
        <InputForm 
          id="password" 
          label="Password" 
          register={register} 
          name="password" 
          error={errors.password?.message as string} 
          maskPassword={true}
        />
        <Link to='/auth/forget-password' className="w-fit ms-auto"> forget password ?</Link>
        <button className="btn_primary"> 
          {isPending ? <LuLoader className="animate-spin mx-auto text-lg" /> : 'Login'}
        </button>
      </form>
      <p className="text-sm text-center text-gray-500"> 
        Don't have an account ? 
        <Link to="/auth/register" className="text-main font-bold"> Register </Link>  
      </p>
    </div>
  )
}

export default LoginForm;
