import { axiosInstance } from "@/services";
import { isAxiosError } from "axios";
import type { IBrandResponse } from "../models/ibrand";

export const getAllBrands = async () => {
  try {
    const { data } = await axiosInstance.get<IBrandResponse>('brands');
    return data;
  } catch (err) {
    if (isAxiosError(err)) {
      throw new Error(err.response?.data.message || 'failed. Please try again.')
    }
    throw new Error("Unexpected error occurred");
  }
}
