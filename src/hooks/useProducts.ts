import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

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
  const [products, setProducts] = useState<IProduct[]>([]);
  const { mutateAsync } = useMutation({
    mutationFn: ({ limit, catId }: { limit: number; catId?: string; }) => getAllProducts(limit, catId),
    onSuccess: (res) => {
      setProducts(res.data);
    },
    onError: (err) => toast.error(err.message)
  })
  const selectedTab = (catId: string) => {
    setActiveTab(catId);
    if (catId) mutateAsync({ limit: 4, catId })
    else mutateAsync({ limit: 4 })
  }
  useEffect(() => {
    mutateAsync({ limit: 4 })
  }, [mutateAsync])
  return { tabsList, activeTab, products, selectedTab }
}

export default useProducts;
