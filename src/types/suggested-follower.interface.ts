import { IUserSummary } from "./user-summary.interface";

export interface ISuggestedFollower extends IUserSummary {
	followsYou: boolean;
	followedBy: string[];
}
