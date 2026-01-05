import { isAxiosError } from "axios";

import { axiosInstance } from "@/services";
import type { TCheckoutSchema } from "@/validations"; 
import type { Iorder } from "@/features/orders/models/iorder"; 

interface IResponse {
  status: string;
  data: Iorder,
  session: {
    cancel_url: string;
    success_url: string;
    url: string;
  }
}

export const cashOrder = async ({cartId, formData}: { cartId: string; formData: TCheckoutSchema }) => {
  try {
    const { data } = await axiosInstance.post<IResponse>(`orders/${cartId}`, { shippingAddress: formData });
    return data;
  } catch (err) {
    if (isAxiosError(err)) {
      throw new Error(err.response?.data.message || 'failed. Please try again.')
    }
    throw new Error("Unexpected error occurred");
  }
}

export const onlineOrder = async ({cartId, formData}: { cartId: string; formData: TCheckoutSchema }) => {
  try {
    const { data } = await axiosInstance.post<IResponse>(`orders/checkout-session/${cartId}?url=http://localhost:5173`, { shippingAddress: formData });
    return data;
  } catch (err) {
    if (isAxiosError(err)) {
      throw new Error(err.response?.data.message || 'failed. Please try again.')
    }
    throw new Error("Unexpected error occurred");
  }
}
