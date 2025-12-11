import { Link } from 'react-router-dom';

import styles from './styles.module.css';

const Hero = () => {
  return (
    <section className={`pt-24 ${styles.hero_bg}`}>
      <div className="container">
        <div className="hero_content flex flex-col gap-6 text-white">
          <h1 className='text-3xl sm:text-4xl lg:text-5xl font-semibold leading-10 md:leading-14 lg:leading-16'> 
            Elevate Your Home <br /> with Stylish Furniture 
          </h1>
          <p className='w-full text-sm md:text-base sm:w-lg md:w-xl'> 
            Explore a range of high-quality, affordable furniture designed to transform any room. 
            Discover the perfect blend of style, comfort, and functionality for your space. 
          </p>
          <Link to='/products' className='block w-fit bg-main px-6 py-2 rounded-lg'> Shop Now </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero;
