import { Link } from "react-router-dom";

import { AuthHeader, InputForm, useRegister } from "@/features/auth";
import { LuLoader } from "react-icons/lu";

const RegisterForm = () => {
  const { register, handleSubmit, errors, submitForm, isPending } = useRegister();
  return (
    <div className="col container">
      <AuthHeader title="Create a Account" description="Create a new account" />
      <form onSubmit={handleSubmit(submitForm)} className="flex flex-col gap-4 mt-6 md:mt-8 mb-4">
        <InputForm 
          id="name" 
          label="Name" 
          register={register} 
          name="name" 
          error={errors.name?.message as string} 
          type="text" 
        />
        <InputForm 
          id="email" 
          label="Email" 
          register={register} 
          name="email" 
          error={errors.email?.message as string} 
          type="email" 
        />
        <InputForm 
          id="phone" 
          label="Phone Number" 
          register={register} 
          name="phone" 
          error={errors.phone?.message as string} 
          type="tel" 
        />
        <InputForm 
          id="password" 
          label="Password" 
          register={register} 
          name="password" 
          error={errors.password?.message as string} 
          maskPassword={true} 
          passwordConditions={true} 
        />
        <InputForm 
          id="rePassword"
          label="Confirm Password" 
          register={register} 
          name="rePassword" 
          error={errors.rePassword?.message as string} 
          maskPassword={true} 
        />
        <button type="submit" className="btn_primary"> 
          {isPending ? <LuLoader className="animate-spin mx-auto text-lg" /> : 'Register'}
        </button>
      </form>
      <p className="text-sm text-center text-gray-500"> 
        Already have an account ? 
        <Link to="/auth/login" className="text-main font-bold"> Login </Link>  
      </p>
    </div>
  )
}

export default RegisterForm;
