import { useEffect, useState } from "react";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Drawer, DrawerClose, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Slider } from "@/components/ui/slider";
import { BreadCrumb, getAllCategories } from "@/features/main";
import { ProductCard } from '@/features/products';
import { useProducts } from "@/hooks";
import { useQuery } from "@tanstack/react-query";
import { FaFilter } from "react-icons/fa6";

const ProductList = () => {
  const { products, mutateAsync, results, activeTab, selectedTab, totalPages } = useProducts();
  const [currentPage, setCurrentPage] = useState(1);
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const [price, setPrice] = useState<number[]>([0, 20000]);
  const { data: categories } = useQuery({
    queryKey: ['categories'],
    queryFn: getAllCategories,
    select: (data) => data.data
  })
  const onPageChange= (p: number) => {
    setCurrentPage(p)
    mutateAsync({ limit: 12, catId: activeTab, page: p, minPrice: price[0], maxPrice: price[1] })
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  const filteByPrice = (minPrice: number, maxPrice: number) => {
    console.log(minPrice);
    console.log(maxPrice);
    mutateAsync({ limit: 12, catId: activeTab , page: currentPage, minPrice, maxPrice })
  }
  useEffect(() => {
    mutateAsync({ limit: 12, page: 1 })
  }, [])
  return (
    <>
      <BreadCrumb pageTitle="Category" />
      <section className="pb-10">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-4 md:gap-6">

            {/* large screen */}
            <Accordion type="multiple" className={`col hidden lg:block lg:w-xs h-fit bg-white rounded-lg border border-gray-300`} defaultValue={['item-1']}>
              <AccordionItem className="px-4" value="item-1">
                <AccordionTrigger className="text-secondary text-xl"> Category </AccordionTrigger>
                <AccordionContent>
                  <ul className="flex flex-col gap-2 text-balance px-2">
                    <li onClick={() => selectedTab(12, '')}  className={`text-lg text-gray-500 cursor-pointer ${activeTab === '' ? 'text-secondary' : ''}`}> All Products </li>
                    {categories?.map((category) => (
                      <li onClick={() => selectedTab(12, category._id)}  key={category._id} className={`text-lg text-gray-500 cursor-pointer ${activeTab === category._id ? 'text-secondary' : ''}`}> {category.name} </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem className="px-4" value="item-2">
                <AccordionTrigger className="text-secondary text-xl"> Price </AccordionTrigger>
                <AccordionContent className="px-2">
                  <Slider className="my-3 [&_[data-orientation=horizontal]>span]:bg-main **:[[role=slider]]:border-gray-500" value={price} onValueChange={setPrice} min={0} max={20000} step={100} />
                  <div className="flex justify-between">
                    <div className="from_range text-lg">
                      <span className="text-gray-500 ">From: </span>
                      <span className="text-secondary"> {price[0]} EGP</span>
                    </div>
                    <div className="to_range text-lg">
                      <span className="text-gray-500">To: </span>
                      <span className="text-secondary"> {price[1]} EGP</span>
                    </div>
                  </div>
                  <button onClick={() => filteByPrice(price[0], price[1])} className="btn_primary bg-main h-10 text-base mt-3"> Apply </button>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            {/* <FilterProducts screen={'large'} styles={'hidden lg:block lg:w-xs h-fit'} activeTab={activeTab} selectedTab={selectedTab} /> */}
            {/* mobile screen */}
            <Drawer direction="left">
              <DrawerTrigger asChild>
                <button type="button" className="bg-white py-2 px-4 rounded-lg border border-gray-300 ml-auto flex items-center gap-1 lg:hidden"> 
                  Filted By
                  <FaFilter /> 
                </button>
              </DrawerTrigger>
              <DrawerContent className="z-9999 overflow-y-auto">
                <Accordion type="multiple" className={`col block bg-white rounded-lg border border-gray-300`} defaultValue={['item-1']}>
                  <AccordionItem className="px-4" value="item-1">
                    <AccordionTrigger className="text-secondary text-xl"> Category </AccordionTrigger>
                    <AccordionContent>
                      <ul className="flex flex-col gap-2 text-balance px-2">
                        <DrawerClose asChild>
                          <li onClick={() => selectedTab(12, '')}  className={`text-lg text-gray-500 cursor-pointer ${activeTab === '' ? 'text-secondary' : ''}`}> All Products </li>
                        </DrawerClose>
                        {categories?.map((category) => (
                          <DrawerClose asChild>
                            <li onClick={() => selectedTab(12, category._id)}  key={category._id} className={`text-lg text-gray-500 cursor-pointer ${activeTab === category._id ? 'text-secondary' : ''}`}> {category.name} </li>
                          </DrawerClose>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem className="px-4" value="item-2">
                    <AccordionTrigger className="text-secondary text-xl"> Price </AccordionTrigger>
                    <AccordionContent className="px-2">
                      <Slider className="my-3 [&_[data-orientation=horizontal]>span]:bg-main **:[[role=slider]]:border-gray-500" value={price} onValueChange={setPrice} min={0} max={20000} step={100} />
                      <div className="flex justify-between">
                        <div className="from_range text-lg">
                          <span className="text-gray-500 ">From: </span>
                          <span className="text-secondary"> {price[0]} EGP</span>
                        </div>
                        <div className="to_range text-lg">
                          <span className="text-gray-500">To: </span>
                          <span className="text-secondary"> {price[1]} EGP</span>
                        </div>
                      </div>
                      <button onClick={() => filteByPrice(price[0], price[1])} className="btn_primary bg-main h-10 text-base mt-3"> Apply </button>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                {/* <FilterProducts screen={'mobile'} styles={'block h-fit'} activeTab={activeTab} selectedTab={selectedTab} /> */}
              </DrawerContent>
            </Drawer>

            <div className="col bg-white flex-1 p-4 rounded-lg border border-gray-300">
              <div className="flex justify-between mb-6">
                <div className="text-secondary font-semibold text-xl"> 
                  All Products 
                  <span className="text-sm text-main ms-2">({results})</span> 
                </div>
                <button className="text-secondary font-semibold text-xl"> Sort By </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {products.length > 0 ? products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                )) : <p className="text-xl col-span-3 text-center"> No items available in this category yet! 🛒🚫 </p>}
              </div>
              {products.length > 0 && (
                <Pagination className="mt-4">
                  <PaginationContent>

                    {/* Previous */}
                    <PaginationItem>
                      <PaginationPrevious
                        onClick={() => onPageChange(currentPage - 1)}
                        className={`cursor-pointer ${currentPage === 1 ? "pointer-events-none opacity-50" : ""}`}
                      />
                    </PaginationItem>

                    {/* Pages */}
                    {pages.map((p) => (
                      <PaginationItem key={p}>
                        <PaginationLink
                          className="cursor-pointer"
                          isActive={currentPage === p}
                          onClick={() => onPageChange(p)}
                        >
                          {p}
                        </PaginationLink>
                      </PaginationItem>
                    ))}

                    {/* Next */}
                    <PaginationItem>
                      <PaginationNext
                        onClick={() => onPageChange(currentPage + 1)}
                        className={`cursor-pointer ${currentPage === totalPages ? "pointer-events-none opacity-50" : ""}`}
                      />
                    </PaginationItem>

                  </PaginationContent>
                </Pagination>
              )}
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default ProductList;
