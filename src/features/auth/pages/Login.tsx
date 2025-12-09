import { AuthSlider, LoginForm } from "@/features/auth";

const Login = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 items-center h-screen">
      <LoginForm />
      <AuthSlider />
    </section>
  )
}

export default Login;
