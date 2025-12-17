import { axiosInstance } from "@/services";
import { isAxiosError } from "axios";
import type { IProduct } from "../models/iproduct";

interface IWishlistResponse {
  message: string;
  status: string;
  data: IProduct[];
}

export const addProductToWishlist = async (productId: string) => {
  try {
    const { data } = await axiosInstance.post<IWishlistResponse>(`wishlist`, { productId });
    return data;
  } catch (err) {
    if (isAxiosError(err)) {
      throw new Error(err.response?.data.message || 'failed. Please try again.')
    }
    throw new Error("Unexpected error occurred");
  }
}

export const removeProductFromWishlist = async (productId: string) => {
  try {
    const { data } = await axiosInstance.delete<IWishlistResponse>(`wishlist/${productId}`);
    return data;
  } catch (err) {
    if (isAxiosError(err)) {
      throw new Error(err.response?.data.message || 'failed. Please try again.')
    }
    throw new Error("Unexpected error occurred");
  }
}

export const getLoggedUserWishlist = async () => {
  try {
    const { data } = await axiosInstance.get<IWishlistResponse>(`wishlist`);
    return data;
  } catch (err) {
    if (isAxiosError(err)) {
      throw new Error(err.response?.data.message || 'failed. Please try again.')
    }
    throw new Error("Unexpected error occurred");
  }
}

