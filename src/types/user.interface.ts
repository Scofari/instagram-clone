import { IUserSummary } from "./user-summary.interface";

export interface IUser extends IUserSummary {
	status: string;
	postsCount: number;
	followersCount: number;
	followingCount: number;
	content?: string[];
}
