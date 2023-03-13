import axios from "axios";
import { IPost } from "../@types/posts";

export const PostService = {
	async getAll() {
		const { data } = await axios.get<IPost[]>(
			"http://localhost:3000/posts"
		);

		return data;
	},
	async getByUsername(username: string) {
		if (username) {
			const { data } = await axios.get<IPost[]>(
				`http://localhost:3000/posts?username=${username}`
			);

			return data[0];
		}
	},
};
