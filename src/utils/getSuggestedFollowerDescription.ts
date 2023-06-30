import { ISuggestedFollower } from "../types/suggested-follower.interface";

export const getSuggestedFollowerDescription = ({
	followedBy,
	followsYou,
}: ISuggestedFollower): string => {
	if (followsYou) return "Follows you";
	if (followedBy.length) return `Followed by ${followedBy.join(",")}`;

	return "Suggested for you";
};
