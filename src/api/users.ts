import axiosInstance from "./axiosInstance";
import { IUser } from "../types/user.interface";
import { ISuggestedFollower } from "../types/suggested-follower.interface";

export const getAllUsers = async () => {
    const { data } = await axiosInstance.get<IUser[]>("/users");

    return data;
};

export const getUserByUsername = async (username: string) => {
    const { data } = await axiosInstance.get<IUser[]>("/users", {
        params: { username },
    });

    return data[0];
};

export const getSuggestedFollowers = async () => {
    const { data } = await axiosInstance.get<ISuggestedFollower[]>(
        "/suggested-followers"
    );

    return data;
};
