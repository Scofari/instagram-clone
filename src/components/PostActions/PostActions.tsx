import { FC, useState } from "react";
import { FiHeart, BsChat, FiSend, BsBookmark } from "react-icons/all";
import Tooltip from "../UI/Tooltip";
import styles from "./PostActions.module.scss";
import { Link } from "react-router-dom";

const PostActions: FC = () => {
	const [isLiked, setIsLiked] = useState(false);
	const toggleLike = () => {
		setIsLiked((prev) => !prev);
	};

	return (
		<div className={styles.actions}>
			<Tooltip content="Like">
				<FiHeart
					onClick={toggleLike}
					className={isLiked ? styles.heart : ""}
				/>
			</Tooltip>
			<Tooltip content="Comment">
				<Link to="/p/123">
					<BsChat />
				</Link>
			</Tooltip>
			<Tooltip content="Share Post">
				<FiSend />
			</Tooltip>
			<Tooltip content="Save">
				<BsBookmark />
			</Tooltip>
		</div>
	);
};

export default PostActions;
