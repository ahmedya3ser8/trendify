import { useQuery } from "@tanstack/react-query";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Drawer, DrawerClose, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Slider } from "@/components/ui/slider";
import { getAllCategories } from "@/features/main";
import { FaFilter } from "react-icons/fa6";

interface IProps {
  activeTab: string;
  setActiveTab: (catId: string) => void;
  price: [number, number];
  setPrice: (value: [number, number]) => void;
  setCurrentPage: (page: number) => void;
  setLimit: (limit: number) => void;
}

const FilterProducts = ({ activeTab, setActiveTab, price, setPrice, setCurrentPage, setLimit }: IProps) => {
  const { data: categories } = useQuery({
    queryKey: ['categories'],
    queryFn: getAllCategories,
    select: (data) => data.data
  })
  return (
    <>
      {/* large screen */}
      <Accordion type="multiple" className="col hidden lg:block lg:w-xs h-fit bg-white rounded-lg border border-gray-300" defaultValue={['item-1']}>
        <AccordionItem className="px-4" value="item-1">
          <AccordionTrigger className="text-secondary text-xl"> Category </AccordionTrigger>
          <AccordionContent>
            <ul className="flex flex-col gap-2 text-balance px-2">
              <li onClick={() => { setActiveTab(''); setLimit(12); setCurrentPage(1) }}  className={`text-lg text-gray-500 cursor-pointer ${activeTab === '' ? 'text-secondary' : ''}`}> All Products </li>
              {categories?.map((category) => (
                <li onClick={() => { setActiveTab(category._id); setLimit(12); setCurrentPage(1) }}  key={category._id} className={`text-lg text-gray-500 cursor-pointer ${activeTab === category._id ? 'text-secondary' : ''}`}> {category.name} </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem className="px-4" value="item-2">
          <AccordionTrigger className="text-secondary text-xl"> Price </AccordionTrigger>
          <AccordionContent className="px-2">
            <Slider className="my-3 [&_[data-orientation=horizontal]>span]:bg-main **:[[role=slider]]:border-gray-500" value={price} onValueChange={(value) => setPrice(value as [number, number])} min={0} max={50000} step={100} />
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
          </AccordionContent>
        </AccordionItem>
      </Accordion>
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
                    <li onClick={() => { setActiveTab(''); setLimit(12); setCurrentPage(1) }}  className={`text-lg text-gray-500 cursor-pointer ${activeTab === '' ? 'text-secondary' : ''}`}> All Products </li>
                  </DrawerClose>
                  {categories?.map((category) => (
                    <DrawerClose asChild>
                      <li onClick={() => { setActiveTab(category._id); setLimit(12); setCurrentPage(1) }}  key={category._id} className={`text-lg text-gray-500 cursor-pointer ${activeTab === category._id ? 'text-secondary' : ''}`}> {category.name} </li>
                    </DrawerClose>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem className="px-4" value="item-2">
              <AccordionTrigger className="text-secondary text-xl"> Price </AccordionTrigger>
              <AccordionContent className="px-2">
                <Slider className="my-3 [&_[data-orientation=horizontal]>span]:bg-main **:[[role=slider]]:border-gray-500" value={price} onValueChange={(value) => setPrice(value as [number, number])} min={0} max={50000} step={100} />
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
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default FilterProducts;
