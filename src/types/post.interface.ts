import { IAuthorProfile } from "./author-profile.interface";

export interface IPost {
    id: number;
    avatar: string;
    description: string;
    dateTime: string;
    likes: string;
    username: string;
    authorProfile: IAuthorProfile;
}
