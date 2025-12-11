import { useQuery } from "@tanstack/react-query";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import { getAllCategories } from "@/features/main";

const Categories = () => {
  const { data: categories } = useQuery({
    queryKey: ['categories'],
    queryFn: getAllCategories,
    select: (data) => data.data
  })
  return (
    <section className="py-10">
      <div className="container">
        <Swiper
          spaceBetween={10}
          loop={true}
          modules={[Autoplay]}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          breakpoints={{
            0: { slidesPerView: 3 },
            375: { slidesPerView: 4 },
            640: { slidesPerView: 5 },
            768: { slidesPerView: 7 },
            1024: { slidesPerView: 8 }
          }}
        >
          {categories?.map((category) => (
            <SwiperSlide key={category._id} className="category_card text-center">
              <div className="image w-16 lg:w-24 xl:w-32 h-16 lg:h-24 xl:h-32 mx-auto">
                <img src={category.image} className="w-full h-full object-cover rounded-full" alt={category.name} />
              </div>
              <h4 className="text-xs lg:text-base text-secondary mt-2"> {category.name} </h4>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Categories;
