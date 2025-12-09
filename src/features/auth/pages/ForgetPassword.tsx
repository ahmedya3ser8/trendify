import { useState } from "react";

import { AuthSlider, ForgetForm, VerifyForm, ResetForm } from "@/features/auth";

const ForgetPassword = () => {
  const [steps, setSteps] = useState<'forget' | 'otp' | 'reset'>('forget');
  const [email, setEmail] = useState<string>("");
  const renderForm = () => {
    switch(steps) {
      case 'forget':
        return <ForgetForm setSteps={setSteps} setEmail={setEmail} />
      case 'otp':
        return <VerifyForm setSteps={setSteps} />
      case 'reset':
        return <ResetForm email={email} />
    }
  }
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 items-center h-screen">
      {renderForm()}
      <AuthSlider />
    </section>
  )
}

export default ForgetPassword;
