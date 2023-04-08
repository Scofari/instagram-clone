import axiosInstance from "./axiosInstance";
import { IUserSummary } from "../types/user-summary.interface";

export const getCurrentUser = async () => {
  const { data } = await axiosInstance.get<IUserSummary>("/authenticate");

  return data;
};
