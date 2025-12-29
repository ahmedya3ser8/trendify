import type { IProduct } from "@/features/products/models/iproduct";

export interface IOrder {
  createdAt: string;
  id: string;
  isDelivered: boolean;
  isPaid: boolean;
  paymentMethodType: string;
  shippingPrice: number;
  taxPrice: number;
  totalOrderPrice: number;
  updatedAt: string;
  user: string;
  _id: string;
  __v: number;
  cartItems: {
    count: number;
    price: number;
    _id: string;
    product: IProduct
  }[];
  shippingAddress: {
    city: string;
    details: string;
    phone: string;
  }
}