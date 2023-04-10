import { Link } from "react-router-dom";
import styles from "./SuggestedFollower.module.scss";

interface SuggestedFollowerProps {
	username: string;
	description: string;
	action: string;
	avatar: string;
	to: string;
	setIsFollowing?: () => void;
	style?: React.CSSProperties;
}

const SuggestedFollower = ({
	username,
	description,
	action,
	avatar,
	style,
	setIsFollowing,
	to = "",
}: SuggestedFollowerProps) => {
	return (
		<div className={styles.follower}>
			<Link to={to}>
				<div className={styles.followerInfo}>
					<img src={avatar} alt="avatar" style={style} />
					<div>
						<p>{username}</p>
						<span>{description}</span>
					</div>
				</div>
			</Link>
			<button onClick={setIsFollowing}>{action}</button>
		</div>
	);
};

export default SuggestedFollower;
