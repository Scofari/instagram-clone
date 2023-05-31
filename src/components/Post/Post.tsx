import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IPost } from "../../types/post.interface";
import {
	CommentForm,
	PostActions,
	HeaderPost,
	CommentList,
} from "../../components";
import { text } from "./data";
import {
	addCommentToLocalStorage,
	getCommentFromLocalStorage,
} from "../../utils/localStorage";
import styles from "./Post.module.scss";

const Post = ({ authorProfile, status, image, likes, dateTime }: IPost) => {
	const [readMore, setReadMore] = useState(false);
	const [viewAllComments, setViewAllComments] = useState(false);
	const [comment, setComment] = useState("");
	const [comments, setComments] = useState<string[]>(
		getCommentFromLocalStorage()
	);

	useEffect(() => {
		addCommentToLocalStorage(comments);
	}, [comments]);

	return (
		<article className={styles.post}>
			<HeaderPost authorProfile={authorProfile} dateTime={dateTime} />
			<div className={styles.cover}>
				<img src={image} alt="cover" />
			</div>
			<PostActions id={authorProfile.id} />
			<span>{likes} likes</span>
			<p>
				<span>
					<Link to={`/${authorProfile.username}`}>
						{authorProfile.username}
					</Link>
				</span>
				{!readMore
					? `${status}...`
					: `${status} ${text.substring(0, text.length)}`}
				<button
					className={styles.button}
					onClick={() => setReadMore(!readMore)}
				>
					{!readMore ? "more" : "show less"}
				</button>
			</p>

			<CommentList
				comments={comments}
				setViewAllComments={setViewAllComments}
				viewAllComments={viewAllComments}
			/>

			<CommentForm
				comment={comment}
				comments={comments}
				setComment={setComment}
				setComments={setComments}
			/>
		</article>
	);
};

export default Post;
