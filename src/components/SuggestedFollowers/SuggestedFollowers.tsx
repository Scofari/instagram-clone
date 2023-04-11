import { useQuery } from "@tanstack/react-query";
import { useState, FC } from "react";
import SuggestedFollower from "../SuggestedFollower";
import SuggestedFollowersFooter from "../UserListFooter";
import { getSuggestedFollowers } from "../../api";
import { ISuggestedFollower } from "../../types/suggested-follower.interface";
import SwitchAccounts from "../SwitchAccounts";
import SuggestedFollowerSkeleton from "../SuggestedFollower/SuggestedFollowerSkeleton";
import styles from "./SuggestedFollowers.module.scss";

const SuggestedFollowers: FC = () => {
	const [isFollowing, setIsFollowing] = useState(false);
	const { data: followers = [], isLoading } = useQuery(
		["suggested-followers"],
		getSuggestedFollowers
	);

	const getSuggestedFollowerDescription = ({
		followedBy,
		followsYou,
	}: ISuggestedFollower) => {
		if (followsYou) return "Follows you";
		if (followedBy.length) return `Followed by ${followedBy.join(",")}`;

		return "Suggested for you";
	};

	const suggestedFollowerSkeleton = [...new Array(5)].map((_, idx) => (
		<SuggestedFollowerSkeleton key={idx} />
	));

	return (
		<div className={styles.suggestedFollowers}>
			<SwitchAccounts />
			<div className={styles.suggestions}>
				<span>Suggestions for you</span>
				<a href="#">See All</a>
			</div>
			{isLoading
				? suggestedFollowerSkeleton
				: followers.map((follower) => {
						const { id, avatar, followedBy, username, followsYou } =
							follower;
						return (
							<SuggestedFollower
								key={follower.id}
								to={username}
								description={getSuggestedFollowerDescription(
									follower
								)}
								{...follower}
							/>
						);
				  })}

			<SuggestedFollowersFooter />
		</div>
	);
};

export default SuggestedFollowers;
