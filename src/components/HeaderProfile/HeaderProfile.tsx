import Button from "./../UI/index";
import { IoIosSettings } from "react-icons/io";
import { PostService } from "../../services/posts.service";
import { useQuery } from "@tanstack/react-query";
import styles from "./HeaderProfile.module.scss";
import { useParams } from "react-router-dom";

const HeaderProfile = () => {
	const { username = "" } = useParams();
	const { data } = useQuery(["posts"], () =>
		PostService.getByUsername(username)
	);

	if (!data?.username) return <p>Loading...</p>;

	return (
		<header className={styles.headerProfile}>
			<div className={styles.userAvatar}>
				<img src={data.avatar} alt="avatar" />
			</div>

			<div className={styles.infoProfile}>
				<div className={styles.editProfile}>
					<h2>{data.username}</h2>
					<Button btnLight={styles.btn} text="Edit profile" />
					<IoIosSettings />
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

export default HeaderProfile;
