export interface IProfilePost {
	id: number;
	src: string;
}

export interface IAuthorProfile {
	id: number;
	dateTime: string;
	avatar: string;
	username: string;
	postsCount: number;
	followersCount: number;
	followingCount: number;
	latestPosts: IProfilePost[];
}
