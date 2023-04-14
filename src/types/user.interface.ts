import { IUserSummary } from "./user-summary.interface";

export interface IUserPost {
	id: number;
	src: string;
}

export interface IUser extends IUserSummary {
	status: string;
	postsCount: number;
	followersCount: number;
	followingCount: number;
	posts: IUserPost[];
}
