import axios from "axios";
import { IUser } from "../@types/user.interface";

export const UserService = {
	async getAll() {
		const { data } = await axios.get<IUser[]>(
			"http://localhost:3000/users"
		);

		return data;
	},
	async getByUsername(username: string) {
		const { data } = await axios.get<IUser[]>(
			`http://localhost:3000/users?username=${username}`
		);

		return data[0];
	},
};
