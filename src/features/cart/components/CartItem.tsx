import { useState } from "react";

import { FaRegTrashAlt } from "react-icons/fa";
import { FaMinus, FaPlus, FaStar } from "react-icons/fa6";
import { LuLoader } from "react-icons/lu";
import useCart from "../hooks/useCart";
import type { ICartItem } from "../models/icart";

const CartItem = ({ product }: { product: ICartItem }) => {
  const [btnAction, setBtnAction] = useState<'minus' | 'plus'>();
  const { removeCartItem, pendingRemoveCart, updateCartItem, pendingUpdateCart } = useCart();
  return (
    <div className="cart_item flex flex-col md:flex-row items-center gap-4 border-b border-gray-300 last:border-b-0 p-4">
      <div className="cart_image w-32">
        <img src={product.product.imageCover} className="w-full" alt="product_image" />
      </div>
      <div className="cart_details w-full flex flex-col md:flex-row max-md:gap-4 justify-between">
        <div className="cart_info flex flex-col gap-2">
          <h3 className="text-gray-500 text-sm"> {product.product.category.name} </h3>
          <h4 className="text-xl text-secondary"> {product.product.title} </h4>
          <div className="cart_stars flex items-center gap-1 text-lg"> 
            <span className="text-main"> {product.product.ratingsAverage} | </span>
            {Array.from({ length: 5 }).map((_, index) => (
              <FaStar key={index} className={index < Math.floor(product.product.ratingsAverage) ? 'text-yellow-500' : ''} />
            ))}
          </div>
        </div>
        <div className="flex flex-row-reverse max-md:items-center md:flex-col gap-2">
          <span className="block ml-auto text-xl text-secondary"> {product.price} EGP</span>
          <div className="btns flex gap-4">
            <button onClick={() => removeCartItem(product.product.id)} className="delete_btn border border-main p-3 rounded-lg cursor-pointer">
              {pendingRemoveCart ? <LuLoader className="animate-spin" /> : <FaRegTrashAlt />  }
            </button>
            <div className="quantity_btns flex justify-between items-center px-2 border border-main rounded-lg w-32">
              <button onClick={() => { updateCartItem({ productId: product.product.id, count: product.count - 1 }); setBtnAction('minus')}} className="cursor-pointer">
                {pendingUpdateCart && btnAction === 'minus' ? <LuLoader className="text-xl animate-spin" /> : <FaMinus className="text-xl text-secondary" />  }
              </button>
              <span className="text-xl"> {product.count} </span>
              <button onClick={() => { updateCartItem({ productId: product.product.id, count: product.count + 1 }); setBtnAction('plus')}} className="cursor-pointer">
                {pendingUpdateCart && btnAction === 'plus' ? <LuLoader className="text-xl animate-spin" /> : <FaPlus className="text-xl text-secondary" /> }
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem;
