import { IAuthorProfile } from "./author-profile.interface";
import { IUserSummary } from "./user-summary.interface";

export interface ISuggestedFollower extends IUserSummary {
    followsYou: boolean;
    followedBy: string[];
    authorProfile: IAuthorProfile;
}
