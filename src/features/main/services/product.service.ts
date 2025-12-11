import { axiosInstance } from "@/services";
import { isAxiosError } from "axios";

import type { IProductResponse } from "../models/iproduct";

export const getAllProducts = async (limit: number, categoryId?: string) => {
  try {
    const { data } = await axiosInstance.get<IProductResponse>('products', {
      params: { 
        limit,
        'category[in]': categoryId
      }
    });
    return data;
  } catch (err) {
    if (isAxiosError(err)) {
      throw new Error(err.response?.data.message || 'failed. Please try again.')
    }
    throw new Error("Unexpected error occurred");
  }
}
