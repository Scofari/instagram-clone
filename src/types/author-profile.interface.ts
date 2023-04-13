export interface IAuthorProfile {
    id: number;
    avatar: string;
    username: string;
    postsCount: number;
    followersCount: number;
    followingCount: number;
    latestPosts: string[];
}
