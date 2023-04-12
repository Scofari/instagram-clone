import { FC, useState } from "react";
import { FiHeart, BsChat, FiSend, BsBookmark } from "react-icons/all";
import Tooltip from "../UI/Tooltip";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../redux/store";
import { setIsLiked } from "../../redux/postSlice";
import styles from "./PostActions.module.scss";

const PostActions: FC = () => {
    const isLiked = useSelector((state: RootState) => state.post.isLiked);
    const navigate = useNavigate();
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
                <span
                    onClick={() =>
                        navigate("/p/123", {
                            state: {
                                image: "https://i.insider.com/639caa68b5600000185b13bd?width=1136&format=jpeg",
                            },
                        })
                    }
                >
                    <BsChat />
                </span>
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
