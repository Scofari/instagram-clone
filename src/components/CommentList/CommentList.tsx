import { useState } from "react";
import Tooltip from "../UI/Tooltip";
import { FiHeart } from "react-icons/fi";
import styles from "./CommentList.module.scss";

interface Props {
	viewAllComments: boolean;
	setViewAllComments(x: boolean): void;
	comments: string[];
}

const CommentList = ({
	viewAllComments,
	setViewAllComments,
	comments,
}: Props) => {
	const [isLiked, setIsLiked] = useState(false);
	const [index, setIndex] = useState(4);

	const showAllComments = () => {
		setViewAllComments(!viewAllComments);
		setIndex(index === 4 ? comments.length : 4);
	};

	return (
		<>
			{comments.slice(0, index).map((comment, idx) => {
				return (
					<div key={idx} className={styles.commentList}>
						<p>
							<span>user_0{idx}</span>
							{comment}
						</p>
						<Tooltip content={isLiked ? "Unlike" : "Like"}>
							<FiHeart
								className={isLiked ? styles.heartIcon : ""}
								onClick={() => setIsLiked(!isLiked)}
							/>
						</Tooltip>
					</div>
				);
			})}

			<button className={styles.button} onClick={showAllComments}>
				{!viewAllComments
					? `View all ${comments.length} comments`
					: `Hide all comments`}
			</button>
		</>
	);
};

export default CommentList;
