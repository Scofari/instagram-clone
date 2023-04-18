import { FC, useState } from "react";
import { Link } from "react-router-dom";
import Popup from "../UI/Popup";
import ProfilePopup from "../ProfilePopup";
import styles from "./SuggestedFollower.module.scss";
import { ISuggestedFollower } from "../../types/suggested-follower.interface";

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
			<Popup content={<ProfilePopup {...authorProfile} />}>
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
