import axios from "axios";
import { IPost, IUser } from "../@types/post.interface";

export const PostService = {
    async getAll() {
        const { data } = await axios.get<IPost[]>(
            "http://localhost:3000/posts"
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
