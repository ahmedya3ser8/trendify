import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { DrawerClose } from "@/components/ui/drawer";
import { Slider } from "@/components/ui/slider";
import { getAllCategories } from "@/features/main";

interface FilterProductsProps {
  activeTab: string;
  screen: string;
  styles: string;
  selectedTab: (limit: number, categoryId: string) => void;
}

const FilterProducts = ({ activeTab, selectedTab, styles, screen }: FilterProductsProps) => {
  const [price, setPrice] = useState<number[]>([0, 2000]);
  const { data: categories } = useQuery({
    queryKey: ['categories'],
    queryFn: getAllCategories,
    select: (data) => data.data
  })
  const filteByPrice = (minPrice: number, maxPrice: number) => {
    console.log(minPrice);
    console.log(maxPrice);
  }
  return (
    <Accordion type="multiple" className={`col ${styles} bg-white rounded-lg border border-gray-300`} defaultValue={['item-1']}>
      <AccordionItem className="px-4" value="item-1">
        <AccordionTrigger className="text-secondary text-xl"> Category </AccordionTrigger>
        <AccordionContent>
          <ul className="flex flex-col gap-2 text-balance px-2">
            {screen === 'mobile' ? (
              <DrawerClose asChild>
                <li onClick={() => selectedTab(12, '')}  className={`text-lg text-gray-500 cursor-pointer ${activeTab === '' ? 'text-secondary' : ''}`}> All Products </li>
              </DrawerClose>
            ) : (
              <li onClick={() => selectedTab(12, '')}  className={`text-lg text-gray-500 cursor-pointer ${activeTab === '' ? 'text-secondary' : ''}`}> All Products </li>
            )}
            {categories?.map((category) => (
              screen === 'mobile' ? (
                <DrawerClose asChild>
                  <li onClick={() => selectedTab(12, category._id)}  key={category._id} className={`text-lg text-gray-500 cursor-pointer ${activeTab === category._id ? 'text-secondary' : ''}`}> {category.name} </li>
                </DrawerClose>
              ) : (
                <li onClick={() => selectedTab(12, category._id)}  key={category._id} className={`text-lg text-gray-500 cursor-pointer ${activeTab === category._id ? 'text-secondary' : ''}`}> {category.name} </li>
              )
            ))}
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem className="px-4" value="item-2">
        <AccordionTrigger className="text-secondary text-xl"> Price </AccordionTrigger>
        <AccordionContent className="px-2">
          <Slider className="my-3 [&_[data-orientation=horizontal]>span]:bg-main **:[[role=slider]]:border-gray-500" value={price} onValueChange={setPrice} min={0} max={2000} step={100} />
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
  )
}

export default FilterProducts;
