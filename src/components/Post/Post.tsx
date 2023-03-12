import React from "react";
import {
    BsThreeDots,
    BsHeart,
    BsChat,
    BsBookmark,
    BsEmojiSmile,
} from "react-icons/bs";
import { FiSend } from "react-icons/fi";

import styles from "./Post.module.scss";

interface PostProps {
    username: string;
    avatar: string;
    likes: string;
    id: number;
    comment?: string;
    dateTime: string;
    title: string;
}

const Post = ({
    id,
    username,
    avatar,
    comment,
    likes,
    dateTime,
    title,
}: PostProps) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.post}>
                <img src={avatar} alt="avatar" />
                <a href="#">{username}</a>
                <div className={styles.time}>
                    <time dateTime={dateTime} title={title}>
                        {dateTime}
                    </time>
                </div>
                <BsThreeDots />
            </div>

            <div className={styles.cover}>
                <img src={avatar} alt="cover" />
            </div>

            <div className={styles.actions}>
                <BsHeart />
                <BsChat />
                <FiSend />
                <BsBookmark />
            </div>

            <span>{likes} likes</span>

            <p>
                <span>{username}</span>
                {comment}
            </p>

            <form>
                <input type="text" placeholder="Add a comment..." />
                <BsEmojiSmile />
            </form>
        </div>
    );
};

export default Post;
