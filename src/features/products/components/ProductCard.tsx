import { Link } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { addProductToCart } from "@/features/cart";
import type { IProduct } from '../models/iproduct'
import { FaHeart, FaPlus, FaStar } from "react-icons/fa6";
import { LuLoader } from "react-icons/lu";

const ProductCard = ({ product }: { product: IProduct }) => {
  const queryClient = useQueryClient();
  const { mutateAsync: addToCart, isPending } = useMutation({
    mutationKey: ['addToCart', product.id],
    mutationFn: addProductToCart,
    onSuccess: (res) => {
      if (res.status === 'success') {
        toast.success(res.message!)
        queryClient.invalidateQueries({ queryKey: ['cart'] });
      } 
    },
    onError: (err) => toast.error(err.message)
  })
  return (
    <div className="product_card bg-white border border-gray-300 rounded-lg relative overflow-hidden">
      <Link to={`/products/${product.category.slug}/${product.id}`} className="product_image block w-full h-[250px]">
        <img src={product.imageCover} className="w-full h-full object-contain" alt={product.title} />
      </Link>
      <button className="wishlist_icon absolute top-4 end-4 cursor-pointer"> <FaHeart className="text-lg" /> </button>
      <div className="product_body flex flex-col gap-2 p-3">
        <h3 className="text-xl text-secondary font-semibold line-clamp-1"> {product.title} </h3>
        <div className="product_stars flex items-center gap-1"> 
          {Array.from({ length: 5 }).map((_, index) => (
            <FaStar key={index} className={index < Math.floor(product.ratingsAverage) ? 'text-yellow-500' : ''} />
          ))}
          <span className="text-sm text-gray-400"> {product.ratingsAverage} (500+)</span>
        </div>
        <div className="flex justify-between">
          <span className="text-main font-medium"> {product.price} EGP</span>
          <button onClick={() => addToCart(product.id)} className="size-8 bg-main text-white rounded-lg flex justify-center items-center cursor-pointer">
            { isPending ? <LuLoader className="animate-spin" /> : <FaPlus /> }   
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard;
