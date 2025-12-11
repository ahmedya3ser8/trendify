import whyChooseUsImg from '@/assets/images/about-us/why-choose-us.png';

const WhyChooseUs = () => {
  return (
    <section className="py-10">
      <div className="container">
        <div className="about_title text-center space-y-2 mb-10">
          <h1 className="text-3xl sm:text-4xl text-secondary font-bold">A few words about us</h1>
          <p className="text-gray-500 text-sm lg:text-lg">Make your best moments more stylish with our latest designs of clothing.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
          <div className="image w-full">
            <img src={whyChooseUsImg} className='w-full' alt="whychooseusimg" />
          </div>
          <div className="content lg:px-10">
            <h2 className='text-3xl text-secondary font-semibold mb-3'>Why choose us ?</h2>
            <p className='text-base sm:text-lg lg:text-xl text-gray-500'>
              Maecenas congue metus id turpis iaculis mattis. Sed pellentesque id arcu id scelerisque. 
              Ut ullamcorper rutrum justo, at blandit eros maximus ut. Integer non tincidunt justo, 
              rhoncus Aenean venenatis sed purus ac sollicitudin. Nulla mauris risus, commodo et luctus rutrum, 
              lobortis sed mauris. Integer congue, sem elementum varius tristique.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs;
