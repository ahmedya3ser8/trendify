import { AuthHeader } from "@/features/auth";

const ForgetForm = () => {
  return (
    <div className="col container">
      <AuthHeader title="Forget Password" description="Enter your email to receive a verification code" />
      <form className="flex flex-col gap-4 mt-6 md:mt-8">
        <div className="floating_label_group">
          <input type="email" id="email" className="floating_input" placeholder=" " />
          <label htmlFor="email" className="floating_label"> Email </label>
        </div>
        <button className="btn_primary"> Send Code </button>
      </form>
    </div>
  )
}

export default ForgetForm;
