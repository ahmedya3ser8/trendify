import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

import { getAllProducts, MainTitle } from "@/features/main";
import { ProductCard } from "@/features/products";
import { FaArrowRight } from 'react-icons/fa6';

const FlashSale = () => {
  const { data: products } = useQuery({
    queryKey: ['flashSaleProducts'],
    queryFn: () => getAllProducts(4),
    select: (data) => data.data
  })
  return (
    <section className="py-10">
      <div className="container">
        <MainTitle title="Flash Sale" description="Grab Them Before They Are Gone!" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <Link to='/products' className="btn_all"> See All <FaArrowRight /> </Link>
      </div>
    </section>
  )
}

export default FlashSale;
