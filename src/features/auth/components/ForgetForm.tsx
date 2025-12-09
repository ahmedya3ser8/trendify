import { AuthHeader, InputForm, useForgetPass } from "@/features/auth";
import { LuLoader } from "react-icons/lu";

interface IProps {
  setSteps: React.Dispatch<React.SetStateAction<'forget' | 'otp' | 'reset'>>;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
}

const ForgetForm = ({ setSteps, setEmail }: IProps) => {
  const { register, handleSubmit, submitForm, errors, isPending } = useForgetPass(setSteps, setEmail);
  return (
    <div className="col container">
      <AuthHeader title="Forget Password" description="Enter your email to receive a verification code" />
      <form onSubmit={handleSubmit(submitForm)} className="flex flex-col gap-4 mt-6 md:mt-8">
        <InputForm 
          id="email" 
          label="Email" 
          register={register} 
          name="email" 
          error={errors.email?.message as string} 
          type="email" 
        />
        <button className="btn_primary"> 
          {isPending ? <LuLoader className="animate-spin mx-auto text-lg" /> : 'Send Code'}
        </button>
      </form>
    </div>
  )
}

export default ForgetForm;
