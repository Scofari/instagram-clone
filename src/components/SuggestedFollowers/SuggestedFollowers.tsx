import { FC } from "react";
import { useQuery } from "@tanstack/react-query";
import { getSuggestedFollowers } from "../../api";
import { ISuggestedFollower } from "../../types/suggested-follower.interface";
import SuggestedFollowerSkeleton from "../SuggestedFollower/SuggestedFollowerSkeleton";
import {
	SwitchAccounts,
	SuggestedFollowersFooter,
	SuggestedFollower,
} from "../../components";
import styles from "./SuggestedFollowers.module.scss";

const SuggestedFollowers: FC = () => {
	const { data: followers = [], isLoading } = useQuery(
		["suggested-followers"],
		getSuggestedFollowers
	);

	const getSuggestedFollowerDescription = ({
		followedBy,
		followsYou,
	}: ISuggestedFollower): string => {
		if (followsYou) return "Follows you";
		if (followedBy.length) return `Followed by ${followedBy.join(",")}`;

		return "Suggested for you";
	};

	const suggestedFollowerSkeleton: JSX.Element[] = [...new Array(5)].map(
		(_, idx) => <SuggestedFollowerSkeleton key={idx} />
	);

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
						const { username, id, authorProfile, avatar } =
							follower;
						return (
							<SuggestedFollower
								key={id}
								to={username}
								description={getSuggestedFollowerDescription(
									follower
								)}
								avatar={avatar}
								username={username}
								authorProfile={authorProfile}
							/>
						);
				  })}

			<SuggestedFollowersFooter />
		</div>
	);
};

export default SuggestedFollowers;
