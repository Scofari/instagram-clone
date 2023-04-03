import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { IoIosSettings } from "react-icons/io";
import { PostService } from "../../services/posts.service";
import Button from "./../UI/Button";
import Tooltip from "../UI/Tooltip";
import styles from "./ProfileHeader.module.scss";

const ProfileHeader = () => {
	const { username = "" } = useParams();
	const { data, isLoading } = useQuery(["posts"], () =>
		PostService.getByUsername(username)
	);
	console.log("username: ", username);

	if (!data?.username || isLoading) return <p>Loading...</p>;

	return (
		<header className={styles.profileHeader}>
			<Tooltip content="Change profile photo">
				<div className={styles.userAvatar}>
					<img src={data.avatar} alt="avatar" />
				</div>
			</Tooltip>

			<div className={styles.infoProfile}>
				<div className={styles.editProfile}>
					<h2>{data.username}</h2>
					<Button btnLight={styles.btn} text="Edit profile" />
					<Tooltip content="Options">
						<IoIosSettings />
					</Tooltip>
				</div>
				<ul>
					{data.followers.map((item, i) => (
						<li key={i}>
							<span>{item.quantity}</span> {item.text}
						</li>
					))}
				</ul>
				<div className={styles.description}>
					<span>{data.username}</span>
					<h1>
						{data.comment}
						<br />
					</h1>
					<a href="https://band.link/tdtin" target={"_blank"}>
						band.link/tdtin
					</a>
				</div>
			</div>
		</header>
	);
};

export default ProfileHeader;
