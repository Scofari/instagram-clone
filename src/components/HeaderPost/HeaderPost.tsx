import { Link } from "react-router-dom";
import { BsThreeDots } from "react-icons/bs";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import ProfilePopup from "../ProfilePopup";
import Popup from "../UI/Popup";
import { IAuthorProfile } from "../../types/author-profile.interface";
import styles from "./HeaderPost.module.scss";

dayjs.extend(relativeTime);

interface HeaderPostProps {
	authorProfile: IAuthorProfile;
}

const HeaderPost = ({ authorProfile }: HeaderPostProps) => {
	const { avatar, username, dateTime } = authorProfile;
	console.log("dateTime: ", dateTime);
	const date = dayjs(dateTime);
	const relativeDate = date.fromNow();
	const dateTooltip = date.format("MMM DD, YYYY");

	return (
		<div className={styles.post}>
			<Popup content={<ProfilePopup {...authorProfile} />}>
				<Link to={`/${username}`}>
					<div className={styles.avatar}>
						<img src={avatar} alt="avatar" />
						<span>{username}</span>
					</div>
				</Link>
			</Popup>
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
