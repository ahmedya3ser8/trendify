import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addProductToWishlist, getLoggedUserWishlist, removeProductFromWishlist } from "../services/wishlist.service";
import toast from "react-hot-toast";
import { useState } from "react";

const useWishlist = () => {
  const queryClient = useQueryClient();
  const [wishlistProductId, setWishlistProductId] = useState<string | null>(null);
  const { data } = useQuery({
    queryKey: ['wishlist'],
    queryFn: getLoggedUserWishlist,
    select: (data) => data.data
  })
  const { mutateAsync: addToWishlist } = useMutation({
    mutationFn: addProductToWishlist,
    onMutate: (productId: string) => {
      setWishlistProductId(productId);
    },
    onSuccess: (res) => {
      console.log(res);
      if (res.status === 'success') {
        toast.success(res.message!)
        queryClient.invalidateQueries({ queryKey: ["wishlist"] });
      } 
    },
    onError: (err) => toast.error(err.message),
    onSettled: () => {
      setWishlistProductId(null);
    }
  })
  const { mutateAsync: removeFromWishlist } = useMutation({
    onMutate: (productId: string) => {
      setWishlistProductId(productId);
    },
    mutationFn: removeProductFromWishlist,
    onSuccess: (res) => {
      console.log(res);
      if (res.status === 'success') {
        toast.success(res.message!)
        queryClient.invalidateQueries({ queryKey: ["wishlist"] });
      } 
    },
    onError: (err) => toast.error(err.message),
    onSettled: () => {
      setWishlistProductId(null);
    }
  })
  const isInWishlist = (productId: string) => {
    return data?.some(item => item.id === productId);
  }
  const toggelWishlist = async (productId: string) => {
    if (isInWishlist(productId)) {
      await removeFromWishlist(productId);
    } else {
      await addToWishlist(productId);
    }
  }
  return { toggelWishlist, isInWishlist, data, wishlistProductId }
}

export default useWishlist;
