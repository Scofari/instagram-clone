import { FC, useState } from "react";
import { FiHeart, BsChat, FiSend, BsBookmark } from "react-icons/all";
import Tooltip from "../UI/Tooltip";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../redux/store";
import { setIsLiked } from "../../redux/postSlice";
import { IUserSummary } from "../../types/user-summary.interface";
import styles from "./PostActions.module.scss";

interface PostActionsProps extends IUserSummary {}

const PostActions: FC<PostActionsProps> = ({ id }) => {
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
            <span onClick={() => navigate(`/p/${id}`)}>
                <Tooltip content="Comment">
                    <BsChat />
                </Tooltip>
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
