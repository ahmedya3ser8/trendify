import { BreadCrumb } from "@/features/main";
import { CartDetails } from "@/features/cart";

const Cart = () => {
  return (
    <>
      <BreadCrumb items={[{label: 'Home', path: '/'}, {label: 'Category', path: '/products'}, {label: 'Cart'}]} />
      <CartDetails />
    </>
  )
}

export default Cart;
