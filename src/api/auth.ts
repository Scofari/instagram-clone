import axiosInstance from "./axiosInstance";
import { IAuthenticate } from "../types/authenticate.interface";

export const getCurrentUser = async () => {
    const { data } = await axiosInstance.get<IAuthenticate>("/authenticate");

    return data;
};
