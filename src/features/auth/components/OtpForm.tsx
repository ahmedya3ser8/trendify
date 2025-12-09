import { AuthHeader } from "@/features/auth";

const OtpForm = () => {
  return (
    <div className="col container">
      <AuthHeader title="Enter Verification Code" description="Enter the code sent to your email" />
      <form className="flex flex-col gap-4 mt-6 md:mt-8">
        <div className="floating_label_group">
          <input type="email" id="email" className="floating_input" placeholder=" " />
          <label htmlFor="email" className="floating_label"> Code </label>
        </div>
        <button className="btn_primary"> Confirm </button>
      </form>
    </div>
  )
}

export default OtpForm;
