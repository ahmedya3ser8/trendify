import { FaStar, FaTruck } from "react-icons/fa6";
import { useLoaderData } from "react-router-dom";
import { Autoplay, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useQuery } from "@tanstack/react-query";

import { BreadCrumb, getAllProducts } from "@/features/main";
import formateDate from "@/utils/formatedDate";
import ProductCard from "../components/ProductCard";
import type { IProduct } from "../models/iproduct";

const ProductDetails = () => {
  const product = useLoaderData() as IProduct;
  const dateToday = formateDate(new Date());
  const afterTwoDays = new Date();
  afterTwoDays.setDate(afterTwoDays.getDate() + 2);
  const dateAfterTwoDays = formateDate(afterTwoDays);
  const { data: products } = useQuery({
    queryKey: ['similarProdutcs', product.id],
    queryFn: () => getAllProducts(4, product.category._id),
    select: (data) => data.data
  })
  return (
    <>
      <BreadCrumb pageTitle="Category" />
      <section className="pb-10">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="col w-full md:w-[40%]">
              <Swiper
                spaceBetween={20}
                slidesPerView={1}
                modules={[Autoplay, EffectFade]}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                autoplay={{ delay: 2000, disableOnInteraction: false }}
                loop={true}
                className='h-[350px]'
              >
                {product.images.map((item, index) => (
                  <SwiperSlide key={index}>
                    <img src={item} className="w-full h-full" alt="product_image" />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="col w-full md:w-[60%] flex flex-col gap-4">
              <h3 className="text-2xl text-secondary font-semibold"> {product.title} </h3>
              <p className="text-gray-600 text-sm"> {product.description} </p>
              <h4 className="text-secondary text-xl"> Category: <span className="text-lg text-main ms-2"> {product.category.name} </span> </h4>
              <h4 className="text-secondary text-xl"> Quantity: <span className="text-lg text-main ms-2"> {product.quantity} </span> </h4>
              <div className="product_stars flex items-center gap-1"> 
                {Array.from({ length: 5 }).map((_, index) => (
                  <FaStar key={index} className={index < Math.floor(product.ratingsAverage) ? 'text-yellow-500' : ''} />
                ))}
                <span className="text-sm text-gray-400"> {product.ratingsAverage} (500+)</span>
              </div>
              <button className="btn_primary"> add to cart </button>
              <p className="text-gray-600 text-sm flex items-center gap-2"> 
                <FaTruck /> Estimated Delivery : {dateToday} - {dateAfterTwoDays}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-10">
        <div className="container">
          <h2 className="text-4xl text-secondary font-semibold mb-8">Similar products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default ProductDetails;
