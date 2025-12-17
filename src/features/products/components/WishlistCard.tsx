import { FaStar } from "react-icons/fa6";
import { LuLoader } from "react-icons/lu";
import { FaRegTrashAlt } from "react-icons/fa";
import type { IProduct } from "../models/iproduct";

interface IProps { 
  product: IProduct; 
  wishlistProductId: string; 
  addToCartId: string;
  toggelWishlist: (productId: string) => void; 
  addToCart: (productId: string) => void 
}

const WishlistCard = ({ product, wishlistProductId, toggelWishlist, addToCart, addToCartId }: IProps) => {
  return (
    <div className="wishlist_item bg-white flex flex-col md:flex-row items-center gap-4 p-4">
      <div className="cart_image w-32">
        <img src={product.imageCover} className="w-full" alt="product_image" />
      </div>
      <div className="cart_details w-full flex flex-col md:flex-row max-md:gap-4 justify-between">
        <div className="cart_info flex flex-col gap-2">
          <h3 className="text-gray-500 text-sm"> {product.category.name} </h3>
          <h4 className="text-lg text-secondary"> {product.title.split(' ', 3).join(' ')} </h4>
          <div className="cart_stars flex items-center gap-1 text-lg"> 
            <span className="text-main"> {product.ratingsAverage} | </span>
            {Array.from({ length: 5 }).map((_, index) => (
              <FaStar key={index} className={index < Math.floor(product.ratingsAverage) ? 'text-yellow-500' : ''} />
            ))}
          </div>
        </div>
        <div className="flex flex-row-reverse max-md:items-center md:flex-col gap-2">
          <span className="block ml-auto text-xl text-secondary"> {product.price} EGP</span>
          <div className="btns flex gap-4">
            <button onClick={() => toggelWishlist(product.id)} className="delete_btn border border-main p-3 rounded-lg cursor-pointer">
              {wishlistProductId === product.id ? <LuLoader className="animate-spin" /> : <FaRegTrashAlt />  }
            </button>
            <div onClick={() => addToCart(product.id)} className="bg-main text-white w-32 px-2 flex justify-center items-center border border-main rounded-lg cursor-pointer">
              { addToCartId ===  product.id ? <LuLoader className="animate-spin" /> : 'add to cart' }  
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WishlistCard;
