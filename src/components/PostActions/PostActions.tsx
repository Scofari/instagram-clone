import { FC, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiHeart, BsChat, FiBookmark } from "react-icons/all";
import Tooltip from "../UI/Tooltip";
import { IUserSummary } from "../../types/user-summary.interface";
import styles from "./PostActions.module.scss";
import Share from "../Share";

interface PostActionsProps extends IUserSummary {}

const PostActions: FC<PostActionsProps> = ({ id }) => {
	const [isLiked, setIsLiked] = useState(false);
	const [isSaved, setIsSaved] = useState(false);
	const navigate = useNavigate();

	return (
		<div className={styles.actions}>
			<Tooltip content={isLiked ? "Unlike" : "Like"}>
				<FiHeart
					onClick={() => setIsLiked(!isLiked)}
					className={isLiked ? styles.heart : ""}
				/>
			</Tooltip>
			<span onClick={() => navigate(`/p/${id}`)}>
				<Tooltip content="Comment">
					<BsChat />
				</Tooltip>
			</span>
			<Share />

			<Tooltip content={isSaved ? "Remove" : "Save"}>
				<FiBookmark
					onClick={() => setIsSaved(!isSaved)}
					className={isSaved ? styles.bookMark : ""}
				/>
			</Tooltip>
		</div>
	);
};

export default PostActions;
