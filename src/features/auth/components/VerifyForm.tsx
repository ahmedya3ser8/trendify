import { AuthHeader, InputForm } from "@/features/auth";
import { useVerifyCode } from "@/features/auth"; 
import { LuLoader } from "react-icons/lu";

interface IProps {
  setSteps: React.Dispatch<React.SetStateAction<'forget' | 'otp' | 'reset'>>;
}

const OtpForm = ({ setSteps }: IProps) => {
  const { register, handleSubmit, errors, submitForm, isPending } = useVerifyCode(setSteps);
  return (
    <div className="col container">
      <AuthHeader title="Enter Verification Code" description="Enter the code sent to your email" />
      <form onSubmit={handleSubmit(submitForm)} className="flex flex-col gap-4 mt-6 md:mt-8">
        <InputForm 
          id="code" 
          label="Code" 
          register={register} 
          name="resetCode" 
          error={errors.resetCode?.message as string} 
          type="text" 
        />
        <button className="btn_primary">
          {isPending ? <LuLoader className="animate-spin mx-auto text-lg" /> : 'Confirm'}
        </button>
      </form>
    </div>
  )
}

export default OtpForm;
