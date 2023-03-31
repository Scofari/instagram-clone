import { FC } from "react";
import { BsHeart, BsChat, FiSend, BsBookmark } from "react-icons/all";
import Tooltip from "../UI/Tooltip";
import styles from "./PostActions.module.scss";

const PostActions: FC = () => {
	return (
		<div className={styles.actions}>
			<Tooltip content="Like">
				<BsHeart />
			</Tooltip>
			<Tooltip content="Comment">
				<BsChat />
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
