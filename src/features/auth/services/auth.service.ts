import { isAxiosError } from "axios";

import { axiosInstance } from "@/services"
import type { TForgetSchema, TLoginSchema, TRegisterSchema, TResetPassSchema, TVerifyCodeSchema } from "@/validations";
import type { IAuthResponse, IForgetResponse, IResetPassResponse, IVerifyCodeResponse } from "@/features/auth"; 

export const signup = async (formData: TRegisterSchema) => {
  try {
    const { data } = await axiosInstance.post<IAuthResponse>('auth/signup', formData);
    return data;
  } catch (err) {
    if (isAxiosError(err)) {
      throw new Error(err.response?.data.message || 'failed. Please try again.')
    }
    throw new Error("Unexpected error occurred");
  }
}

export const signin = async (formData: TLoginSchema) => {
  try {
    const { data } = await axiosInstance.post<IAuthResponse>('auth/signin', formData);
    return data;
  } catch (err) {
    if (isAxiosError(err)) {
      throw new Error(err.response?.data.message || 'failed. Please try again.')
    }
    throw new Error("Unexpected error occurred");
  }
}

export const forgotPassword = async (formData: TForgetSchema) => {
  try {
    const { data } = await axiosInstance.post<IForgetResponse>('auth/forgotPasswords', formData);
    return data;
  } catch (err) {
    if (isAxiosError(err)) {
      throw new Error(err.response?.data.message || 'failed. Please try again.')
    }
    throw new Error("Unexpected error occurred");
  }
}

export const verifyResetCode = async (formData: TVerifyCodeSchema) => {
  try {
    const { data } = await axiosInstance.post<IVerifyCodeResponse>('auth/verifyResetCode', formData);
    return data;
  } catch (err) {
    if (isAxiosError(err)) {
      throw new Error(err.response?.data.message || 'failed. Please try again.')
    }
    throw new Error("Unexpected error occurred");
  }
}

export const resetPassword = async (formData: TResetPassSchema) => {
  try {
    const { data } = await axiosInstance.put<IResetPassResponse>('auth/resetPassword', formData);
    return data;
  } catch (err) {
    if (isAxiosError(err)) {
      throw new Error(err.response?.data.message || 'failed. Please try again.')
    }
    throw new Error("Unexpected error occurred");
  }
}
