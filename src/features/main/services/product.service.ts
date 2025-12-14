import { axiosInstance } from "@/services";
import { isAxiosError } from "axios";

import type { IProductResponse } from "../models/iproduct";

export const getAllProducts = async (limit: number, categoryId?: string, page?: number, minPrice?: number, maxPrice?: number, sort?: 'price' | '-price') => {
  try {
    const { data } = await axiosInstance.get<IProductResponse>('products', {
      params: { 
        limit,
        'category[in]': categoryId,
        page,
        'price[lte]': maxPrice,
        'price[gte]': minPrice,
        sort
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
