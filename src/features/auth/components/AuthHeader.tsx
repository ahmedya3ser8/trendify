
const AuthHeader = ({ title, description }: { title: string; description: string } ) => {
  return (
    <div className="auth_header flex flex-col max-md:text-center gap-1.5 md:gap-2.5">
      <h1 className="text-2xl md:text-3xl text-secondary font-bold"> {title} </h1>
      <p className="text-xs sm:text-sm text-gray-500"> {description} </p>
    </div>
  )
}

export default AuthHeader;
