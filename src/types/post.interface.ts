import { IAuthorProfile } from "./author-profile.interface";

export interface IPost {
	image: string;
	status: string;
	likes: string;
	dateTime: string;
	authorProfile: IAuthorProfile;
}
