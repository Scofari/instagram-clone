export interface IPost {
	avatar: string;
	description: string;
	dateTime: string;
	id: number;
	likes: string;
	username: string;
}

export interface IUser {
	avatar: string;
	status: string;
	id: number;
	username: string;
	postsCount: number;
	followersCount: number;
	followingCount: number;
}
