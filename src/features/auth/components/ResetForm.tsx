import { AuthHeader } from "@/features/auth";

const ResetForm = () => {
  return (
    <div className="col container">
      <AuthHeader title="Reset Password" description="Enter a new password for your account." />
      <form className="flex flex-col gap-4 mt-6 md:mt-8">
        <div className="floating_label_group">
          <input type="email" id="email" className="floating_input" placeholder=" " />
          <label htmlFor="email" className="floating_label"> Code </label>
        </div>
        <div className="floating_label_group">
          <input type="password" id="password" className="floating_input" placeholder=" " />
          <label htmlFor="password" className="floating_label"> Password </label>
        </div>
        <button className="btn_primary"> Reset </button>
      </form>
    </div>
  )
}

export default ResetForm;
