import { Link } from "react-router-dom";

import { useProducts } from "@/hooks";
import { MainTitle } from "@/features/main";
import { ProductCard } from "@/features/products";
import { FaArrowRight } from "react-icons/fa6";

const BestSelling = () => {
  const { tabsList, activeTab, products, selectedTab } = useProducts();
  return (
    <section className="py-10">
      <div className="container">
        <MainTitle title='Products' description='Best Selling Products' />
        <div className="tabs bg-[#eee] w-fit mx-auto px-4 py-2 rounded-lg space-x-4 mb-8">
          {tabsList.map((tab, index) => (
            <button 
              key={index} 
              onClick={() => selectedTab(tab.catId)} 
              className={`tab w-fit p-2 text-sm rounded-lg cursor-pointer ${activeTab === tab.catId ? 'bg-main text-white' : ''}`}
            > {tab.content} </button>
          ))}
        </div>
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

export default BestSelling;
