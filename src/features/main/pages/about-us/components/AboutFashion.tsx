import { FaInstagram } from "react-icons/fa6";

import fashionImg1 from '@/assets/images/about-us/fashion-1.jpg';
import fashionImg2 from '@/assets/images/about-us/fashion-2.webp';
import fashionImg3 from '@/assets/images/about-us/fashion-3.webp';
import fashionImg4 from '@/assets/images/about-us/fashion-4.webp';
import fashionImg5 from '@/assets/images/about-us/fashion-5.jpg';

const AboutFashion = () => {
  return (
    <section className="pt-10">
      <div className="main_title text-center flex flex-col gap-2 mb-8">
        <div className="flex justify-center items-center gap-4 text-xl md:text-3xl text-secondary">
          <span> <FaInstagram /> </span>
          <h2 className="text-main italic font-bold">#iconic_fashion</h2>
          <h3 className="font-bold">On Instagram</h3>
        </div>
        <p className="text-xs sm:text-sm text-gray-500">Phasellus lorem malesuada ligula pulvinar commodo maecenas</p>
      </div>
      <div className="grid grid-cols-5">
        {[fashionImg1, fashionImg2, fashionImg3, fashionImg4, fashionImg5].map((item, index) => (
          <div key={index} className="col">
            <img src={item} className="w-full h-full object-cover" alt="fashion_image" />
          </div>
        ))}
      </div>
    </section>
  )
}

export default AboutFashion;
