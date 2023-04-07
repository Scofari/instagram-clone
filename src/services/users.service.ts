import axios from "axios";
import { IUser } from "../@types/user.interface";

const BASE_URL = "http://localhost:3000/users";

export const UserService = {
	async getAll() {
		const { data } = await axios.get<IUser[]>(BASE_URL);

		return data;
	},
	async getByUsername(username: string) {
		const { data } = await axios.get<IUser[]>(BASE_URL, {
			params: { _username: username },
		});

		return data[0];
	},
};
