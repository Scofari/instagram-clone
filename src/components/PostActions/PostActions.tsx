import { FC, useState } from "react";
import { FiHeart, BsChat, FiSend, BsBookmark } from "react-icons/all";
import Tooltip from "../UI/Tooltip";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../redux/store";
import { setIsLiked } from "../../redux/postSlice";
import styles from "./PostActions.module.scss";
import { IPost } from "../../types/post.interface";
import { IUserSummary } from "../../types/user-summary.interface";
interface PostActionsProps extends IUserSummary {}

const PostActions: FC<PostActionsProps> = ({ id, avatar, username }) => {
	const isLiked = useSelector((state: RootState) => state.post.isLiked);
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const toggleLike = () => {
		dispatch(setIsLiked());
	};

	return (
		<div className={styles.actions}>
			<Tooltip content={isLiked ? "Unlike" : "Like"}>
				<FiHeart
					onClick={toggleLike}
					className={isLiked ? styles.heart : ""}
				/>
			</Tooltip>
			<span
				onClick={() =>
					navigate(`/p/${id}`, {
						state: {
							id,
							avatar,
							username,
						},
					})
				}
			>
				<Link to={`/p/${id}`}>
					<Tooltip content="Comment">
						<BsChat />
					</Tooltip>
				</Link>
			</span>
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
