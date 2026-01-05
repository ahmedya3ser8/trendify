import type { Iorder } from "../models/iorder";

const OrderCard = ({ order }: { order: Iorder }) => {
  return (
    <div className="order bg-white rounded-lg p-4 flex flex-col gap-3">
              
      <div className="order_head flex justify-between items-center">
        <div className="text-xl text-secondary"> Order ID: {order.id} </div>
        <div className="flex gap-4">
          <span className={`block py-1 px-2 rounded-lg ${order.isPaid ? 'bg-[#f0fdf4] text-[#22c55e]' : 'text-[#f97316] bg-[#fff7ed]'}`}> 
            {order.isPaid ? 'Paid' : 'Unpaid'}
          </span>
          <span className="block py-1 px-2 bg-[#f0f9ff] text-[#0ea5e9] rounded-lg"> 
            {order.isDelivered || 'On Delivery'}
          </span>
        </div>
      </div>

      <div className="order_body border border-[#D1D1D8] rounded-lg overflow-y-auto max-h-65">
        {order.cartItems.map((product) => (
          <div key={product.product.id} className="order_card flex gap-4 p-2 border-b border-[#D1D1D8] last:border-b-0">
            <div className="order_image w-[100px] h-[100px]">
              <img src={product.product.imageCover} className="w-full h-full object-cover"  alt="order_image" />
            </div>
            <div className="order_content flex justify-between items-center flex-1">
              <h3 className="text-secondary text-xl"> {product.product.title.split(' ', 3).join(' ')} </h3>
              <div className="text-right">
                <span className="block text-secondary"> {product.price} EGP </span>
                <span className="block text-[#9d9daa]"> Qyt: {product.count} </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="order_foot flex gap-4">
        
        <ul className="col w-3/5 p-3 bg-gray-50 space-y-2">
          <li className="space-x-2.5">
            <span className="text-lg text-secondary font-semibold"> Mobile: </span>
            <span className="text-gray-400"> {order.user.phone} </span>
          </li>
          <li className="space-x-2.5">
            <span className="text-lg text-secondary font-semibold"> Address: </span>
            <span className="text-gray-400"> {order?.shippingAddress?.details || ''} </span>
          </li>
          <li className="space-x-2.5">
            <span className="text-lg text-secondary font-semibold"> City: </span>
            <span className="text-gray-400"> {order?.shippingAddress?.city || ''} </span>
          </li>
          <li className="space-x-2.5">
            <span className="text-lg text-secondary font-semibold"> Country: </span>
            <span className="text-gray-400"> Egypt </span>
          </li>
          <li className="space-x-2.5">
            <span className="text-lg text-secondary font-semibold"> Payment Method: </span>
            <span className="text-gray-400"> {order.paymentMethodType} </span>
          </li>
        </ul>

        <ul className="col w-2/5 p-3 bg-gray-50 space-y-2">
          <li className="flex justify-between items-center">
            <span className="text-lg text-secondary font-semibold"> Subtotal </span>
            <span className="text-gray-400"> {order.totalOrderPrice} EGP </span>
          </li>
          <li className="flex justify-between items-center">
            <span className="text-lg text-secondary font-semibold"> Shipping </span>
            <span className="text-gray-400"> {order.shippingPrice} EGP </span>
          </li>
          <li className="flex justify-between items-center border-b border-[#D1D1D8] pb-4">
            <span className="text-lg text-secondary font-semibold"> Tax </span>
            <span className="text-gray-400"> {order.taxPrice} EGP </span>
          </li>
          <li className="flex justify-between items-center pt-4">
            <span className="text-lg text-secondary font-semibold"> Total </span>
            <span className="text-gray-400"> {order.totalOrderPrice} EGP </span>
          </li>
        </ul>

      </div>

    </div>
  )
}

export default OrderCard;
