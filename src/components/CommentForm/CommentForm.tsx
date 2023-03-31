import React, { FC } from "react";
import { BsEmojiSmile } from "react-icons/bs";
import Tooltip from "../UI/Tooltip";
import styles from "./CommentForm.module.scss";

const CommentForm: FC = () => {
	return (
		<form className={styles.form}>
			<input type="text" placeholder="Add a comment..." />
			<Tooltip content="Emoji">
				<BsEmojiSmile size={13} />
			</Tooltip>
		</form>
	);
};

export default CommentForm;
