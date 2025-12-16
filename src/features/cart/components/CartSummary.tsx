import { Link } from "react-router-dom";

const CartSummary = ({ cartId, totalPrice }: { totalPrice: number; cartId: string }) => {
  return (
    <div className="col flex flex-col gap-4 bg-white border border-gray-300 rounded-lg p-4 lg:w-xs xl:w-sm h-fit">
      <h3 className="text-2xl text-secondary">Order Summary</h3>
      <ul className="flex flex-col gap-2 border-b border-gray-300 pb-3">
        <li className="flex justify-between">
          <span className="text-lg text-secondary">Price</span>
          <span className="text-lg text-secondary">{totalPrice || 0} EGP</span>
        </li>
        <li className="flex justify-between">
          <span className="text-lg text-secondary">Shipping</span>
          <span className="text-lg text-main">Free</span>
        </li>
        <li className="flex justify-between">
          <span className="text-lg text-secondary">Coupon Applied</span>
          <span className="text-lg text-secondary">0.00EGP</span>
        </li>
      </ul>
      <ul className="flex flex-col gap-2 border-b border-gray-300 pb-3">
        <li className="flex justify-between">
          <span className="text-lg text-secondary">Total</span>
          <span className="text-lg text-secondary">{totalPrice || 0} EGP</span>
        </li>
        <li className="flex justify-between">
          <span className="text-lg text-secondary">Estimated Delivery by</span>
          <span className="text-lg text-secondary">18 Dec, 2025</span>
        </li>
      </ul>
      <div className="coupon border border-gray-300 p-2 flex rounded-lg">
        <input type="text" className="w-full outline-none" placeholder="Coupon Code" />
        <button className="bg-main text-white px-4 py-2 rounded-lg"> apply </button>
      </div>
      <Link to={`/checkout/${cartId}`} className="btn_primary flex justify-center items-center"> Proceed To Checkout </Link>
    </div>
  )
}

export default CartSummary;
