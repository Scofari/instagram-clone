import { FC, useState } from "react";
import { FiHeart, BsChat, FiSend, BsBookmark } from "react-icons/all";
import Tooltip from "../UI/Tooltip";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../redux/store";
import { setIsLiked } from "../../redux/postSlice";
import styles from "./PostActions.module.scss";

const PostActions: FC = () => {
	const isLiked = useSelector((state: RootState) => state.post.isLiked);
	const dispatch = useAppDispatch();
	const toggleLike = () => {
		dispatch(setIsLiked());
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
