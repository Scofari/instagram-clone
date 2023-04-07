import axios from "axios";
import { IPost } from "../@types/post.interface";

const BASE_URL = "http://localhost:3000/posts";

export const PostService = {
	async getAll() {
		const { data } = await axios.get<IPost[]>(BASE_URL);

		return data;
	},
	async getByUsername(username: string) {
		const { data } = await axios.get<IPost[]>(BASE_URL, {
			params: { _username: username },
		});

		return data[0];
	},
};
