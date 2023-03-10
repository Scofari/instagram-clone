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
	userImg?: string;
	caption?: string;
	likes: number;
}

const Post = ({ userImg, username, avatar, caption, likes }: PostProps) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.post}>
				<img src={avatar} alt="avatar" />
				<a href="#">{username}</a>
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
				{caption}
			</p>

			<form>
				<input type="text" placeholder="Add a comment..." />
				<BsEmojiSmile />
			</form>
		</div>
	);
};

export default Post;
