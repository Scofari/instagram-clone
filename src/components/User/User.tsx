import { Link } from "react-router-dom";
import styles from "./User.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { FC } from "react";

const User: FC = () => {
	const currentUser = useSelector(
		(state: RootState) => state.app.currentUser
	);
	if (!currentUser) return null;
	console.log("currentUser: ", currentUser);
	const { avatar, id, username } = currentUser;

	return (
		<div className={styles.user}>
			<Link to={`/${username}`}>
				<div className={styles.userInfo}>
					<img src={avatar} alt="avatar" />
					<div>
						<p>{username}</p>
						<span>{username}</span>
					</div>
				</div>
			</Link>
			<button>Switch</button>
		</div>
	);
};

export default User;
