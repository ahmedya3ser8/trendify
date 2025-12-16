import { axiosInstance } from "@/services";
import { isAxiosError } from "axios";
import type { ICartResponse } from "../models/icart";

export const addProductToCart = async (productId: string) => {
  try {
    const { data } = await axiosInstance.post<ICartResponse>(`cart`, { productId });
    return data;
  } catch (err) {
    if (isAxiosError(err)) {
      throw new Error(err.response?.data.message || 'failed. Please try again.')
    }
    throw new Error("Unexpected error occurred");
  }
}

export const getLoggedUserCart = async () => {
  try {
    const { data } = await axiosInstance.get<ICartResponse>(`cart`);
    return data;
  } catch (err) {
    if (isAxiosError(err)) {
      throw new Error(err.response?.data.message || 'failed. Please try again.')
    }
    throw new Error("Unexpected error occurred");
  }
}

export const removeSpecificCartItem = async (productId: string) => {
  try {
    const { data } = await axiosInstance.delete<ICartResponse>(`cart/${productId}`);
    return data;
  } catch (err) {
    if (isAxiosError(err)) {
      throw new Error(err.response?.data.message || 'failed. Please try again.')
    }
    throw new Error("Unexpected error occurred");
  }
}

export const updateCartProductQuantity = async (productId: string, count: number) => {
  try {
    const { data } = await axiosInstance.put<ICartResponse>(`cart/${productId}`, { count });
    return data;
  } catch (err) {
    if (isAxiosError(err)) {
      throw new Error(err.response?.data.message || 'failed. Please try again.')
    }
    throw new Error("Unexpected error occurred");
  }
}

export const clearUserCart = async () => {
  try {
    const { data } = await axiosInstance.delete<{ message: string }>(`cart`);
    return data;
  } catch (err) {
    if (isAxiosError(err)) {
      throw new Error(err.response?.data.message || 'failed. Please try again.')
    }
    throw new Error("Unexpected error occurred");
  }
}
