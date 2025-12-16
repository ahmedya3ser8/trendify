import type { IProduct } from "@/features/products/models/iproduct";

export interface ICartResponse {
  cartId: string;
  message?: string;
  status: string;
  numOfCartItems: number;
  data: ICart
}

export interface ICartItem {
  count: number;
  price: number;
  product: IProduct;
  _id: string;
}

export interface ICart {
  cartOwner: string;
  createdAt: string;
  updatedAt: string;
  __v: string;
  _id: string;
  totalCartPrice: number;
  products: ICartItem[]
}