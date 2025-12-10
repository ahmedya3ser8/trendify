import { axiosInstance } from "@/services";
import { isAxiosError } from "axios";
import type { ICategoryResponse } from "../models/icategory";

export const getAllCategories = async () => {
  try {
    const { data } = await axiosInstance.get<ICategoryResponse>('categories');
    return data;
  } catch (err) {
    if (isAxiosError(err)) {
      throw new Error(err.response?.data.message || 'failed. Please try again.')
    }
    throw new Error("Unexpected error occurred");
  }
}
