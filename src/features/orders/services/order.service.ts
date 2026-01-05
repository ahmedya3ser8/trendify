import { axiosInstance } from "@/services";
import { isAxiosError } from "axios";
import type { Iorder } from "../models/iorder";

export const getUserOrders = async (userId: string) => {
  try {
    const { data } = await axiosInstance.get<Iorder[]>(`orders/user/${userId}`);
    return data;
  } catch (err) {
    if (isAxiosError(err)) {
      throw new Error(err.response?.data.message || 'failed. Please try again.')
    }
    throw new Error("Unexpected error occurred");
  }
}
