import { FC, FormEvent, useEffect, useRef, useState } from "react";
import { BsEmojiSmile } from "react-icons/bs";
import Tooltip from "../UI/Tooltip";
import styles from "./CommentForm.module.scss";

interface CommentFormProps {
	isModalOpen?: boolean;
}

const getLocalStorage = () => {
	let comments = localStorage.getItem("comments");

	if (comments) {
		return JSON.parse(localStorage.getItem("comments") as string);
	} else {
		return [];
	}
};

const CommentForm: FC<CommentFormProps> = ({ isModalOpen }) => {
	const [comment, setComment] = useState("");
	const [comments, setComments] = useState<string[]>(getLocalStorage());
	const textareaRef = useRef<HTMLTextAreaElement | null>(null);
	const emojiSizeStyle = !isModalOpen ? 13 : 25;

	useEffect(() => {
		const textareaEl = textareaRef.current;
		const onChangeScrollHeight = (e: any) => {
			if (textareaEl) {
				let scrollHeight = e.target.scrollHeight;
				textareaEl.style.height = `${scrollHeight}px`;
			}
		};
		if (textareaEl) {
			textareaEl.addEventListener("keyup", onChangeScrollHeight);
		}
		return () => {
			if (textareaEl) {
				textareaEl.removeEventListener("keyup", onChangeScrollHeight);
			}
		};
	}, []);

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setComments([...comments, comment]);
		setComment("");
	};

	useEffect(() => {
		localStorage.setItem("comments", JSON.stringify(comments));
	}, [comments]);

	return (
		<>
			{comments.map((item, idx) => {
				return (
					<div key={idx}>
						<p>
							<span>user_0{idx}</span>
							{item}
						</p>
					</div>
				);
			})}
			<form className={styles.form} onSubmit={handleSubmit}>
				{isModalOpen ? (
					<div className={styles.commentForm}>
						<Tooltip content="Emoji">
							<BsEmojiSmile size={emojiSizeStyle} />
						</Tooltip>
						<textarea
							ref={textareaRef}
							value={comment}
							placeholder="Add a comment..."
							onChange={(e) => setComment(e.target.value)}
							autoComplete="off"
						/>
						<span>Post</span>
					</div>
				) : (
					<>
						<textarea
							ref={textareaRef}
							value={comment}
							placeholder="Add a comment..."
							onChange={(e) => setComment(e.target.value)}
							autoComplete="off"
						/>
						{comment && (
							<button type="submit" className={styles.postBtn}>
								Post
							</button>
						)}
						<Tooltip content="Emoji">
							<BsEmojiSmile size={emojiSizeStyle} />
						</Tooltip>
					</>
				)}
			</form>
		</>
	);
};

export default CommentForm;
