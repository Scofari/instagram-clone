import { IPost } from "../types/post.interface";
import axiosInstance from "./axiosInstance";

export const getAllPosts = async () => {
	const { data } = await axiosInstance.get<IPost[]>("/posts");

	return data;
};
