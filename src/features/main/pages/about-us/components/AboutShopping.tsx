import shoppingImg from '@/assets/images/about-us/online-shopping.png';

const AboutShopping = () => {
  return (
    <section className="py-10">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
          <div className="image w-full">
            <img src={shoppingImg} className='w-full' alt="whychooseusimg" />
          </div>
          <div className="content lg:px-10">
            <h2 className='text-3xl text-secondary font-semibold mb-3'>Trusted online shopping</h2>
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

export default AboutShopping;
