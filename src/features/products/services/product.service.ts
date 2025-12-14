import type { LoaderFunctionArgs } from "react-router-dom";
import { isAxiosError } from "axios";

import { axiosInstance } from "@/services";
import type { IProduct, IProductResponse } from '../models/iproduct';

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

export const getProductById = async ({ params }: LoaderFunctionArgs) => {
  try {
    const { data } = await axiosInstance.get<{ data: IProduct }>(`products/${params.id}`);
    return data.data;
  } catch (err) {
    if (isAxiosError(err)) {
      throw new Error(err.response?.data.message || 'failed. Please try again.')
    }
    throw new Error("Unexpected error occurred");
  }
}
