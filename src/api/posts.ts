import { IPost } from "../types/post.interface";
import axiosInstance from "./axiosInstance";

export const getAllPosts = async () => {
	const { data } = await axiosInstance.get<IPost[]>("/posts");

	return data;
};

export const getPostById = async (id: number) => {
	const { data } = await axiosInstance.get<IPost[]>("/posts", {
		params: { id },
	});
	console.log("data: ", data);

	return data[0];
};
