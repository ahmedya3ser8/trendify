import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from "swiper/modules";

import authSlider1 from '@/assets/images/auth/slider-1.png';
import authSlider2 from '@/assets/images/auth/slider-2.png';
import authSlider3 from '@/assets/images/auth/slider-3.png';

const AuthSlider = () => {
  return (
    <div className='hidden md:block'>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        modules={[Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true}
        className='h-screen'
      >
        {[authSlider1, authSlider2, authSlider3].map((item, index) => (
          <SwiperSlide key={index}>
            <div className="image_slider w-full h-full relative">
              <img src={item} className='w-full h-full object-cover' alt="image_slider" />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center">
                <h4 className='text-2xl font-bold mb-2.5'>Welcome to Trendify</h4>
                <p className='text-sm'>Discover the latest trends, <br/> express your unique style.</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default AuthSlider;
