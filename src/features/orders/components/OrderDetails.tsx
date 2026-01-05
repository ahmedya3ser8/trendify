import { useQuery } from "@tanstack/react-query";
import { getUserOrders } from "../services/order.service";
import OrderCard from "./OrderCard";

const OrderDetails = () => {
  const userId = localStorage.getItem('userId');
  console.log(userId);
  const { data: orders } = useQuery({
    queryKey: ['allorders', userId],
    queryFn: () => getUserOrders(userId!),
    enabled: !!userId,
  })
  console.log(orders)
  return (
    <section className="pb-10">
      <div className="container">
        <h1 className="text-2xl font-semibold text-secondary mb-6"> Orders Details </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {orders?.map((order) => (
            <OrderCard key={order._id} order={order} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default OrderDetails;
