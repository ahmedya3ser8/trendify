import { BreadCrumb } from "@/features/main";
import { FilterProducts, PaginationProducts, ProductCard } from '@/features/products';
import { useProducts } from "@/hooks";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuGroup, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { FaSortAmountUp, FaSortAmountDown } from "react-icons/fa";
import { IoFilterOutline } from "react-icons/io5";

const ProductList = () => {
  const { products, results, activeTab, totalPages, setActiveTab, setCurrentPage, currentPage, price, setPrice, setLimit, setSort } = useProducts(12);
  return (
    <>
      <BreadCrumb pageTitle="Category" />
      <section className="pb-10">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-4 md:gap-6">
            <FilterProducts activeTab={activeTab} setLimit={setLimit} price={price} setActiveTab={setActiveTab} setCurrentPage={setCurrentPage} setPrice={setPrice} />
            <div className="col bg-white flex-1 p-4 rounded-lg border border-gray-300">
              <div className="flex justify-between mb-6">
                <div className="text-secondary font-semibold text-xl"> 
                  All Products 
                  <span className="text-sm text-main ms-2">({results})</span> 
                </div>
                <DropdownMenu modal={false}>
                  <DropdownMenuTrigger asChild>
                    <button className="text-secondary font-semibold text-xl flex items-center gap-2 cursor-pointer"> <IoFilterOutline /> Sort By </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-fit" align="end">
                    <DropdownMenuGroup>
                      <DropdownMenuItem onClick={() => setSort('-price')} className="text-sm cursor-pointer">
                        <FaSortAmountUp /> High to Low
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setSort('price')} className="text-sm cursor-pointer">
                        <FaSortAmountDown /> Low to High
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu> 
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {products.length > 0 ? products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                )) : <p className="text-xl col-span-3 text-center"> No items available in this category yet! 🛒🚫 </p>}
              </div>
              {products.length > 0 && <PaginationProducts currentPage={currentPage} onPageChange={(p) => setCurrentPage(p)} totalPages={totalPages} />}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ProductList;
