import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { IoIosSettings } from "react-icons/io";
import { UserService } from "../../services/users.service";
import Button from "./../UI/Button";
import Tooltip from "../UI/Tooltip";
import styles from "./ProfileHeader.module.scss";

const ProfileHeader = () => {
	const { username = "" } = useParams();
	const { data } = useQuery(["users"], () =>
		UserService.getByUsername(username)
	);
	console.log("username: ", username);

	if (!data?.username) return <p>Loading...</p>;
	console.log("data: ", data);

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
					<li>
						<span>{data.postsCount}</span> posts
					</li>
					<li>
						<span>{data.followersCount}</span> followers
					</li>
					<li>
						<span>{data.followingCount}</span> following
					</li>
				</ul>
				<div className={styles.description}>
					<span>{data.username}</span>
					<h1>
						{data.status}
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
