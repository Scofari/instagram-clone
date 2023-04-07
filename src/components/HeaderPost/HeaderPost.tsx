import { Link } from "react-router-dom";
import { BsThreeDots } from "react-icons/bs";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { IPost } from "../../@types/post.interface";
import Tooltip from "../UI/Tooltip";
import ProfilePopup from "../ProfilePopup";
import styles from "./HeaderPost.module.scss";

dayjs.extend(relativeTime);

interface HeaderPostProps extends IPost {}

const HeaderPost = ({ username, avatar, dateTime }: HeaderPostProps) => {
	const date = dayjs(dateTime);
	const relativeDate = date.fromNow();
	const dateTooltip = date.format("MMM DD, YYYY");

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
