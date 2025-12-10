
const MainTitle = ({ title, description }: { title: string; description: string }) => {
  return (
    <div className="main_title text-center mb-8">
      <h2 className="text-2xl font-caveat text-main mb-1">{title}</h2>
      <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-secondary">{description}</h3>
    </div>
  )
}

export default MainTitle;
