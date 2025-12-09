import { AuthSlider, RegisterForm } from "@/features/auth";

const Register = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 items-center h-screen">
      <RegisterForm />
      <AuthSlider />
    </section>
  )
}

export default Register;
