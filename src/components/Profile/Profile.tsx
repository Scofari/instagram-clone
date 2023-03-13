import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IoIosSettings } from "react-icons/io";
import { IoAddSharp } from "react-icons/io5";
import Button from "../UI";
import Highlight from "../Highlight";
import { IPost } from "../../@types/posts";
import { PostService } from "../../services/posts.service";
import styles from "./Profile.module.scss";

const Profile = () => {
	const { username = "" } = useParams();
	const [post, setPost] = useState<IPost>();

	useEffect(() => {
		if (!username) return;

		const fetchData = async () => {
			try {
				const data = await PostService.getByUsername(username);
				console.log("data: ", data);

				setPost(data);
			} catch (error) {
				console.error(error);
				alert("Something went wrong");
			}
		};

		fetchData();
	}, [username]);

	if (!post?.username) return <p>Loading...</p>;
	console.log("post: ", post);

	return (
		<div className={styles.profile}>
			<header className={styles.headerProfile}>
				<div className={styles.userAvatar}>
					<img src={post.avatar} alt="avatar" />
				</div>

				<div className={styles.infoProfile}>
					<div className={styles.editProfile}>
						<h2>{post.username}</h2>
						<Button text="Edit profile" />
						<IoIosSettings />
					</div>
					<ul>
						<li>
							<span>4</span> posts
						</li>
						<li>
							<span>26</span> followers
						</li>
						<li>
							<span>12</span> following
						</li>
					</ul>
					<div className={styles.description}>
						<span>{post.username}</span>
						<h1>
							{post.comment}
							<br />
						</h1>
						<a href="https://band.link/tdtin" target={"_blank"}>
							band.link/tdtin
						</a>
					</div>
				</div>
			</header>

			<div className={styles.highlightList}>
				<Highlight icon={IoAddSharp} text="New" />
				<Highlight icon={IoAddSharp} text="New" />
			</div>
		</div>
	);
};

export default Profile;
