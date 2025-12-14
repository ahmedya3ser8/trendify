import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

import { getAllProducts } from "@/features/main";

function useDebounce<T>(value: T, delay = 500) {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);
  return debounced;
}

const useProducts = (limitProducts: number ) => {
  const [tabsList] = useState([
    { catId: "", content: "All" },
    { catId: "6439d5b90049ad0b52b90048", content: "Men's" },
    { catId: "6439d58a0049ad0b52b9003f", content: "Women's" },
    { catId: "6439d2d167d9aa4ca970649f", content: "Electronics" }
  ]);
  const [activeTab, setActiveTab] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(limitProducts);
  const [sort, setSort] = useState<'price' | '-price'>();
  const [price, setPrice] = useState<[number, number]>([0, 50000]);
  const debouncedPrice = useDebounce(price);

  const { data } = useQuery({
    queryKey: ['products', activeTab, currentPage, debouncedPrice, limit, sort],
    queryFn: () => getAllProducts(limit, activeTab || undefined, currentPage, debouncedPrice[0], debouncedPrice[1], sort)
  })
  
  return { 
    products: data?.data ?? [],
    results: data?.results ?? 0,
    totalPages: data?.metadata.numberOfPages ?? 0,
    activeTab,
    setActiveTab,
    currentPage,
    setCurrentPage,
    price,
    setPrice,
    debouncedPrice,
    tabsList,
    setLimit,
    setSort
  }
}

export default useProducts;
