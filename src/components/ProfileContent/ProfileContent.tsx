import { FC } from "react";
import ProfilePost from "../ProfilePost";
import styles from "./ProfileContent.module.scss";

const posts = [
	{
		img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Lion_waiting_in_Namibia.jpg/1200px-Lion_waiting_in_Namibia.jpg",
	},
	{
		img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Lion_waiting_in_Namibia.jpg/1200px-Lion_waiting_in_Namibia.jpg",
	},
	{
		img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Lion_waiting_in_Namibia.jpg/1200px-Lion_waiting_in_Namibia.jpg",
	},
];

const ProfileContent: FC = () => {
	return (
		<div className={styles.content}>
			{posts.map((post, idx) => (
				<ProfilePost key={idx} src={post.img} />
			))}
		</div>
	);
};

export default ProfileContent;
