import React from "react";
import { Link } from "react-router-dom";
import { BsThreeDots } from "react-icons/bs";
import { IPost } from "../../@types/post.interface";
import styles from "./HeaderPost.module.scss";

interface HeaderPostProps extends IPost {}

const HeaderPost = ({ username, avatar, dateTime, title }: HeaderPostProps) => {
	return (
		<div className={styles.post}>
			<Link to={`/${username}`}>
				<div className={styles.avatar}>
					<img src={avatar} alt="avatar" />
					<span>{username}</span>
				</div>
			</Link>
			<div className={styles.time}>
				<time dateTime={dateTime} title={title}>
					{dateTime}
				</time>
			</div>
			<BsThreeDots />
		</div>
	);
};

export default HeaderPost;
