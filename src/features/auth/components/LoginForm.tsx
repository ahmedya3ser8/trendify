import { Link } from "react-router-dom";

import { AuthHeader } from "@/features/auth";

const LoginForm = () => {
  return (
    <div className="col container">
      <AuthHeader title="Welcome Back!" description="Please log in or sign up to continue using our app." />
      <form className="flex flex-col gap-4 mt-6 md:mt-8 mb-4">
        <div className="floating_label_group">
          <input type="email" id="email" className="floating_input" placeholder=" " />
          <label htmlFor="email" className="floating_label"> Email </label>
        </div>
        <div className="floating_label_group">
          <input type="password" id="password" className="floating_input" placeholder=" " />
          <label htmlFor="password" className="floating_label"> Password </label>
        </div>
        <Link to='/auth/forget-password' className="w-fit ms-auto"> forget password ?</Link>
        <button className="btn_primary"> Login </button>
      </form>
      <p className="text-sm text-center text-gray-500"> 
        Don't have an account ? 
        <Link to="/auth/register" className="text-main font-bold"> Register </Link>  
      </p>
    </div>
  )
}

export default LoginForm;
