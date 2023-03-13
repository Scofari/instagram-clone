import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./UserItem.module.scss";

interface UserItemProps {
	name: string;
	description: string;
	action: string;
	img: string;
	setIsFollowing?: () => void;
	to: string;
	style?: React.CSSProperties;
}

const UserItem = ({
	name,
	description,
	action,
	img,
	style,
	setIsFollowing,
	to = "",
}: UserItemProps) => {
	return (
		<div className={styles.user}>
			<Link to={to}>
				<div className={styles.userInfo}>
					<img src={img} alt="avatar" style={style} />
					<div>
						<p>{name}</p>
						<span>{description}</span>
					</div>
				</div>
			</Link>
			<button onClick={setIsFollowing}>{action}</button>
		</div>
	);
};

export default UserItem;
