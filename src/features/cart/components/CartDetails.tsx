import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { clearUserCart, getLoggedUserCart } from "../services/cart.service";
import { CartItem, CartSummary } from "@/features/cart";
import toast from "react-hot-toast";
import { LuLoader } from "react-icons/lu";
import { Link } from "react-router-dom";

const CartDetails = () => {
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
  return (
    <section className="pb-10">
      <div className="container">
        <div className="cart_header flex justify-between mb-8">
          <h1 className="text-4xl text-secondary font-semibold">
            Cart <span className="text-xl text-main ms-2"> {cartDetails?.numOfCartItems || 0} items </span> 
          </h1>
          <button onClick={() => clearCart()} className="bg-main text-white px-4 rounded-lg cursor-pointer"> 
            {pendingClearCart ? <LuLoader className="animate-spin" /> : 'Remove All' }
          </button>
        </div>
        <div className="flex flex-col lg:flex-row gap-5">
          <div className="col bg-white border border-gray-300 rounded-lg flex-1 flex flex-col gap-5">
            {cartDetails && cartDetails?.data.products.length > 0 ? cartDetails?.data.products.map((product) => (
              <CartItem key={product.product.id} product={product} />
            )): (
              <div className="flex justify-center items-center gap-2 h-full text-xl"> 
                You have currently 
                <span className="text-secondary font-bold"> 0 items </span> 
                in your cart. 
                <Link to='/products' className="underline text-secondary"> Go To Shop </Link> 
              </div>
            )}
          </div>
          <CartSummary totalPrice={cartDetails?.data.totalCartPrice as number} cartId={cartDetails?.cartId as string} />
        </div>
      </div>
    </section>
  )
}

export default CartDetails;
