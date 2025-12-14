import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

import { getAllProducts } from "@/features/main";
import type { IProduct } from "@/features/main/models/iproduct";

const useProducts = () => {
  const [tabsList] = useState([
    { catId: "", content: "All" },
    { catId: "6439d5b90049ad0b52b90048", content: "Men's" },
    { catId: "6439d58a0049ad0b52b9003f", content: "Women's" },
    { catId: "6439d2d167d9aa4ca970649f", content: "Electronics" }
  ]);
  const [activeTab, setActiveTab] = useState('');
  const [results, setResults] = useState<number>(0);
  const [totalPages, setTotalPages] = useState(0);
  const [products, setProducts] = useState<IProduct[]>([]);
  const { mutateAsync } = useMutation({
    mutationFn: ({ limit, catId, page, minPrice, maxPrice }: { limit: number; catId?: string; page?: number, minPrice?: number, maxPrice?: number }) => getAllProducts(limit, catId, page, minPrice, maxPrice),
    onSuccess: (res) => {
      console.log(res);
      setResults(res.results);
      setProducts(res.data);
      setTotalPages(res.metadata.numberOfPages)
    },
    onError: (err) => console.log(err.message)
  })
  const selectedTab = (limit: number, catId: string, page?: number) => {
    setActiveTab(catId);
    if (catId) mutateAsync({ limit, catId, page })
    else mutateAsync({ limit, page })
  }
  return { tabsList, activeTab, products, selectedTab, mutateAsync, results, totalPages }
}

export default useProducts;
