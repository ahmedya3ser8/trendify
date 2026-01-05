import { BreadCrumb } from "@/features/main";
import OrderDetails from "../components/OrderDetails";

const AllOrders = () => {
  return (
    <>
      <BreadCrumb items={[{label: 'Home', path: '/'}, {label: 'Orders'}]} />
      <OrderDetails />
    </>
  )
}

export default AllOrders;
