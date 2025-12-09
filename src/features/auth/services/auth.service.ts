import { isAxiosError } from "axios";

import { axiosInstance } from "@/services"
import type { TRegisterSchema } from "@/validations";
import type { IAuthResponse } from "@/features/auth"; 

export const signup = async (formData: TRegisterSchema) => {
  try {
    const { data } = await axiosInstance.post<IAuthResponse>('/auth/signup', formData);
    return data;
  } catch (err) {
    if (isAxiosError(err)) {
      throw new Error(err.response?.data.message || 'Something went wrong')
    }
    throw new Error("Unexpected error occurred");
  }
}

export const signin = async () => {

}