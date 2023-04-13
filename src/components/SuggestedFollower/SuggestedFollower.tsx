import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./SuggestedFollower.module.scss";

interface SuggestedFollowerProps {
	username: string;
	description: string;
	avatar: string;
	to: string;
}

const SuggestedFollower = ({
	to = "",
	description,
	avatar,
	username,
}: SuggestedFollowerProps) => {
	const [isFollowing, setIsFollowing] = useState(false);

	return (
		<div className={styles.follower}>
			<Link to={to}>
				<div className={styles.followerInfo}>
					<img src={avatar} alt="avatar" />
					<div>
						<p>{username}</p>
						<span>{description}</span>
					</div>
				</div>
			</Link>
			<button onClick={() => setIsFollowing(!isFollowing)}>
				{!isFollowing ? "Follow" : "Unfollow"}
			</button>
		</div>
	);
};

export default SuggestedFollower;
