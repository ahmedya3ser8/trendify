import { Link } from "react-router-dom";

import useAddToCart from "@/hooks/useAddToCart";
import useWishlist from "../hooks/useWishlist";
import { FaHeart, FaPlus, FaStar } from "react-icons/fa6";
import { LuLoader } from "react-icons/lu";
import type { IProduct } from '../models/iproduct';

const ProductCard = ({ product }: { product: IProduct }) => {
  const { toggelWishlist, isInWishlist } = useWishlist();
  const { addToCart, addToCartId } = useAddToCart();
  return (
    <div className="product_card bg-white border border-gray-300 rounded-lg relative overflow-hidden">
      <Link to={`/products/${product.category.slug}/${product.id}`} className="product_image block w-full h-[250px]">
        <img src={product.imageCover} className="w-full h-full object-contain" alt={product.title} />
      </Link>
      <button onClick={() => toggelWishlist(product.id)} className="wishlist_icon absolute top-4 end-4 cursor-pointer">
        {isInWishlist(product.id) ? <FaHeart className="text-xl text-red-500" /> : <FaHeart className="text-xl" />}
      </button>
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
            { addToCartId === product.id ? <LuLoader className="animate-spin" /> : <FaPlus /> }   
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard;
