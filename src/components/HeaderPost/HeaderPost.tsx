import React from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { Link } from "react-router-dom";
import { BsThreeDots } from "react-icons/bs";
import { IPost } from "../../@types/post.interface";
import styles from "./HeaderPost.module.scss";
import Tooltip from "../UI/Tooltip";
import ProfileHeader from "../ProfileHeader";
import CommentForm from "../CommentForm";
import ProfilePopup from "../ProfilePopup";
dayjs.extend(relativeTime);
console.log("relativeTime: ", relativeTime);

interface HeaderPostProps extends IPost {}

const HeaderPost = ({ username, avatar, dateTime }: HeaderPostProps) => {
	const date = dayjs(dateTime);
	const relativeDate = date.fromNow();
	const dateTooltip = date.format("MMM DD, YYYY");
	console.log("username: ", username);

	return (
		<div className={styles.post}>
			<Tooltip content={<ProfilePopup />}>
				<Link to={`/${username}`}>
					<div className={styles.avatar}>
						<img src={avatar} alt="avatar" />
						<span>{username}</span>
					</div>
				</Link>
			</Tooltip>
			<div className={styles.time}>
				<time dateTime={dateTime} title={dateTooltip}>
					{relativeDate}
				</time>
			</div>
			<BsThreeDots />
		</div>
	);
};

export default HeaderPost;
