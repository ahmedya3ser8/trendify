import { useQuery } from "@tanstack/react-query";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import { getAllBrands } from "@/features/main";

const Brands = () => {
  const { data: brands } = useQuery({
    queryKey: ['brands'],
    queryFn: getAllBrands,
    select: (data) => data.data
  })
  return (
    <section className="pt-10">
      <Swiper
        spaceBetween={0}
        loop={true}
        modules={[Autoplay]}
        autoplay={{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: true }}
        allowTouchMove={false}
        speed={1000}
        breakpoints={{
          375: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
          1280: { slidesPerView: 6 },
        }}
      >
        {brands?.map((brand) => (
          <SwiperSlide key={brand._id}>
            <img src={brand.image} className="w-[100px] md:w-20 lg:w-[250px] xl:w-full" alt={brand.name} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Brands;
