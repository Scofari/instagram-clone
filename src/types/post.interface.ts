import { IAuthorProfile } from "./author-profile.interface";

export interface IPost {
    image: string;
    description: string;
    likes: string;
    dateTime: string;
    authorProfile: IAuthorProfile;
}
