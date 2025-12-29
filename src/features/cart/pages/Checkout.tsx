import { BreadCrumb } from "@/features/main";
import CheckoutDetails from "../components/CheckoutDetails";

const Checkout = () => {
  return (
    <>
      <BreadCrumb items={[{label: 'Home', path: '/'}, {label: 'Category', path: '/products'}, {label: 'Cart', path: '/cart'}, {label: 'Checkout'}]} />
      <CheckoutDetails />
    </>
  )
}

export default Checkout;
