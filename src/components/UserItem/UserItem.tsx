import { Link } from "react-router-dom";
import styles from "./UserItem.module.scss";

interface UserItemProps {
	username: string;
	description: string;
	action: string;
	avatar: string;
	to: string;
	setIsFollowing?: () => void;
	style?: React.CSSProperties;
}

const UserItem = ({
	username,
	description,
	action,
	avatar,
	style,
	setIsFollowing,
	to = "",
}: UserItemProps) => {
	return (
		<div className={styles.user}>
			<Link to={to}>
				<div className={styles.userInfo}>
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

export default UserItem;
