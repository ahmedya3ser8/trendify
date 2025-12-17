import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { addProductToCart } from "@/features/cart";
import { useState } from "react";

const useAddToCart = () => {
  const [addToCartId, setAddToCartId] = useState<string | null>(null);
  const queryClient = useQueryClient();
  const { mutateAsync: addToCart } = useMutation({
    onMutate: (productId: string) => {
      setAddToCartId(productId)
    },
    mutationFn: addProductToCart,
    onSuccess: (res) => {
      if (res.status === 'success') {
        toast.success(res.message!)
        queryClient.invalidateQueries({ queryKey: ['cart'] });
      } 
    },
    onError: (err) => toast.error(err.message),
    onSettled: () => {
      setAddToCartId(null)
    }
  })
  return { addToCart, addToCartId }
}

export default useAddToCart;
