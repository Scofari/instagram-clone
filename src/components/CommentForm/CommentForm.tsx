import React from "react";
import { BsEmojiSmile } from "react-icons/bs";
import styles from "./CommentForm.module.scss";

type Props = {};

const CommentForm = (props: Props) => {
	return (
		<form className={styles.form}>
			<input type="text" placeholder="Add a comment..." />
			<BsEmojiSmile />
		</form>
	);
};

export default CommentForm;
