import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { ProfilePopup } from "../../components";
import { Popup } from "../../components/UI";
import { ISuggestedFollower } from "../../types/suggested-follower.interface";
import styles from "./SuggestedFollower.module.scss";

interface SuggestedFollowerProps extends ISuggestedFollower {
	description: string;
	to: string;
}

const SuggestedFollower: FC<SuggestedFollowerProps> = ({
	to = "",
	description,
	avatar,
	username,
	authorProfile,
}) => {
	const [isFollowing, setIsFollowing] = useState(false);

	return (
		<div className={styles.follower}>
			<Popup
				content={
					<ProfilePopup
						{...authorProfile}
						isSuggested
						isFollowing={isFollowing}
						setIsFollowing={setIsFollowing}
					/>
				}
			>
				<Link to={to}>
					<header className={styles.followerInfo}>
						<img src={avatar} alt="avatar" />
						<div>
							<p>{username}</p>
							<span>{description}</span>
						</div>
					</header>
				</Link>
			</Popup>
			<button
				onClick={() => setIsFollowing(!isFollowing)}
				className={`${styles.followersBtn} ${
					!!isFollowing && styles.followingBtn
				}`}
			>
				{!isFollowing ? "Follow" : "Following"}
			</button>
		</div>
	);
};

export default SuggestedFollower;
