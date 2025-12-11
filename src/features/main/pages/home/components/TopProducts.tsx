import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { getAllProducts, MainTitle } from "@/features/main";
import { ProductCard } from "@/features/products";
import { FaArrowRight } from "react-icons/fa6";

const TopProducts = () => {
  const { data: products } = useQuery({
    queryKey: ['topProducts'],
    queryFn: () => getAllProducts(8, '6439d2d167d9aa4ca970649f'),
    select: (data) => data.data
  })
  return (
    <section className="py-10">
      <div className="container">
        <MainTitle title='Top Products' description='Top Picks for You!' />
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

export default TopProducts;
