import { AuthHeader, InputForm, useResetPass } from "@/features/auth";
import { LuLoader } from "react-icons/lu";

const ResetForm = ({ email }: {email: string}) => {
  const { register, handleSubmit, errors, submitForm, isPending } = useResetPass(email);
  return (
    <div className="col container">
      <AuthHeader title="Reset Password" description="Enter a new password for your account." />
      <form onSubmit={handleSubmit(submitForm)} className="flex flex-col gap-4 mt-6 md:mt-8">
        <InputForm 
          id="email" 
          label="Email" 
          register={register} 
          name="email" 
          error={errors.email?.message as string} 
          type="email"
          readonly={true}
        />
        <InputForm 
          id="newPassword" 
          label="New Password" 
          register={register} 
          name="newPassword" 
          error={errors.newPassword?.message as string} 
          maskPassword={true}
          passwordConditions={true}
        />
        <button className="btn_primary">
          {isPending ? <LuLoader className="animate-spin mx-auto text-lg" /> : 'Reset'}
        </button>
      </form>
    </div>
  )
}

export default ResetForm;
