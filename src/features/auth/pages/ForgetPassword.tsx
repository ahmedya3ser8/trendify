import { useState } from "react";

import { AuthSlider, ForgetForm, OtpForm, ResetForm } from "@/features/auth";

const ForgetPassword = () => {
  const [steps, setSteps] = useState<'forget' | 'otp' | 'reset'>('forget');
  const renderForm = () => {
    switch(steps) {
      case 'forget':
        return <ForgetForm />
      case 'otp':
        return <OtpForm />
      case 'reset':
        return <ResetForm />
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
