import React, { FC, KeyboardEvent, useEffect, useRef, useState } from "react";
import { BsEmojiSmile } from "react-icons/bs";
import Tooltip from "../UI/Tooltip";
import styles from "./CommentForm.module.scss";

interface CommentFormProps {
	isModalOpen?: boolean;
}

const CommentForm: FC<CommentFormProps> = ({ isModalOpen }) => {
	const [value, setValue] = useState("");
	const textareaRef = useRef<HTMLTextAreaElement | null>(null);

	useEffect(() => {
		const onChangeScrollHeight = (e: any) => {
			if (textareaRef?.current) {
				let scrollHeight = e.target.scrollHeight;
				textareaRef.current.style.height = `${scrollHeight}px`;
			}
		};
		if (textareaRef?.current) {
			textareaRef.current.addEventListener("keyup", onChangeScrollHeight);
		}
		return () => {
			if (textareaRef?.current) {
				textareaRef.current.removeEventListener(
					"keyup",
					onChangeScrollHeight
				);
			}
		};
	}, []);

	const emojiSizeStyle = !isModalOpen ? 13 : 25;

	return (
		<form className={styles.form} method="POST">
			{isModalOpen ? (
				<div className={styles.commentForm}>
					<Tooltip content="Emoji">
						<BsEmojiSmile size={emojiSizeStyle} />
					</Tooltip>
					<textarea
						ref={textareaRef}
						value={value}
						placeholder="Add a comment..."
						onChange={(e) => setValue(e.target.value)}
						autoComplete="off"
					/>
					<span>Post</span>
				</div>
			) : (
				<>
					<textarea
						ref={textareaRef}
						value={value}
						placeholder="Add a comment..."
						onChange={(e) => setValue(e.target.value)}
						autoComplete="off"
					/>
					{value && (
						<span
							className={styles.postBtn}
							onClick={() => setValue("")}
						>
							Post
						</span>
					)}
					<Tooltip content="Emoji">
						<BsEmojiSmile size={emojiSizeStyle} />
					</Tooltip>
				</>
			)}
		</form>
	);
};

export default CommentForm;
