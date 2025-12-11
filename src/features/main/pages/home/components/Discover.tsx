import { Link } from 'react-router-dom';

import { FaArrowRight } from 'react-icons/fa6';
import styles from './styles.module.css';

const Discover = () => {
  return (
    <section className={`py-10 ${styles.discover_bg}`}>
      <div className="text-white flex flex-col gap-2 justify-center items-center h-full"> 
        <h2 className='text-xl sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl'>Discover Fashion That Speaks To You.</h2>
        <p className='w-full sm:w-lg lg:w-xl xl:w-2xl 2xl:w-3xl text-sm lg:text-base xl:text-lg 2xl:text-xl max-sm:px-4 text-center'>
          Explore a range of high-quality, affordable furniture designed to transform any room. 
          Discover the perfect blend of style, comfort, and functionality for your space.
        </p>
        <Link to='/products' className="btn_all text-white border-white hover:border-main"> See All <FaArrowRight /> </Link>
      </div>
    </section>
  )
}

export default Discover;
