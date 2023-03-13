import React from "react";
import {
	BsThreeDots,
	BsHeart,
	BsChat,
	BsBookmark,
	BsEmojiSmile,
} from "react-icons/bs";
import { FiSend } from "react-icons/fi";
import { Link } from "react-router-dom";
import { IPost } from "../../@types/posts";

import styles from "./Post.module.scss";

const Post = ({
	id,
	username,
	avatar,
	comment,
	likes,
	dateTime,
	title,
}: IPost) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.post}>
				<img src={avatar} alt="avatar" />
				<Link to={`/${username}`}>{username}</Link>
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
