import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { clearUserCart, getLoggedUserCart, removeSpecificCartItem, updateCartProductQuantity } from "../services/cart.service";
import toast from "react-hot-toast";

const useCart = () => {
  const queryClient = useQueryClient();
  const { data: cartDetails } = useQuery({
    queryKey: ['cart'],
    queryFn: getLoggedUserCart
  })
  const { mutateAsync: clearCart, isPending: pendingClearCart } = useMutation({
    mutationFn: clearUserCart,
    onSuccess: () => {    
      toast.success('Cart cleared successfully 🛒');
      queryClient.invalidateQueries({ queryKey: ['cart'] });
    },
    onError: (err) => toast.error(err.message)
  })
  const { mutateAsync: removeCartItem, isPending: pendingRemoveCart } = useMutation({
    mutationFn: removeSpecificCartItem,
    onSuccess: () => {
      toast.success('Product removed successfully');
      queryClient.invalidateQueries({ queryKey: ['cart'] });
    },
    onError: (err) => toast.error(err.message)
  })
  const { mutateAsync: updateCartItem, isPending: pendingUpdateCart } = useMutation({
    mutationFn: ({ productId, count }: { productId: string, count: number }) => updateCartProductQuantity(productId, count),
    onSuccess: () => {
      toast.success('Quantity updated successfully');
      queryClient.invalidateQueries({ queryKey: ['cart'] });
    },
    onError: (err) => toast.error(err.message)
  })
  return { cartDetails, clearCart, pendingClearCart, removeCartItem, pendingRemoveCart, updateCartItem, pendingUpdateCart }
}

export default useCart;
