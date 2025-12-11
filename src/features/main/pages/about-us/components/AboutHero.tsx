import signImg from '@/assets/images/about-us/about-sign.png'
import { FaQuoteLeft } from 'react-icons/fa6';

import styles from './styles.module.css';

const AboutHero = () => {
  return (
    <section className="pb-10">
      <div className="container">
        <div className={`${styles.hero_bg} w-full xl:w-5xl h-[500px] ml-auto rounded-4xl relative`}>
          <div className="hero_content hidden lg:flex flex-col gap-4 bg-white max-w-md rounded-xl p-4 absolute left-0 xl:-left-[25%] top-1/2 -translate-y-1/2">
            <span> <FaQuoteLeft className='text-4xl text-main' /> </span>
            <p className='text-lg text-gray-500'>
              We are glad to present you our most perfect Shopify theme, which supports Sections Everywhere, 
              very high metric scores by google page speed insight. 
              This is the most mobile-oriented theme that will be convenient on any of your devices.
            </p>
            <div className="flex justify-between items-center">
              <h4 className='text-xl text-secondary'>Jack Donowan</h4>
              <div className="image">
                <img src={signImg} className='w-32' alt="about-sign" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutHero;
