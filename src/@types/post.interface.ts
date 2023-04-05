type Followers = {
    quantity: number;
    text: string;
};

export interface IPost {
    avatar: string;
    comment: string;
    dateTime: string;
    id: number;
    likes: string;
    title: string;
    username: string;
    followers: Followers[];
}

export interface IUser {
    avatar: string;
    status: string;
    dateTime: string;
    id: number;
    likes: string;
    title: string;
    username: string;
    followers: Followers[];
}
