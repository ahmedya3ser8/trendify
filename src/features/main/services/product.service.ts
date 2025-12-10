import { axiosInstance } from "@/services";
import { isAxiosError } from "axios";

import type { IProduct } from "../models/iproduct";

export interface IProductResponse {
  results: number;
  metadata: {
    currentPage: number;
    limit: number;
    numberOfPages: number;
  };
  data: IProduct[];
}

export const getAllProducts = async (limit: number) => {
  try {
    const { data } = await axiosInstance.get<IProductResponse>('products', {
      params: { 
        limit
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
