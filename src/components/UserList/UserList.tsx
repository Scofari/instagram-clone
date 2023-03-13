import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import { IPost } from "../../@types/posts";
import { PostService } from "../../services/posts.service";
import UserItem from "../UserItem";
import UserListFooter from "../UserListFooter";
import styles from "./UserList.module.scss";

const UserList = () => {
	const { data = [], isLoading } = useQuery<IPost[]>(["posts"], () =>
		PostService.getAll()
	);

	console.log("data: ", data);
	// const [data, setPosts] = useState<IPost[]>([]);
	const [isFollowing, setIsFollowing] = useState(false);

	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		try {
	// 			const data = await PostService.getAll();
	// 			console.log("data: ", data);

	// 			setPosts(data);
	// 		} catch (error) {
	// 			console.error(error);
	// 			alert("Something went wrong");
	// 		}
	// 	};

	// 	fetchData();
	// }, []);

	if (isLoading) return <p>Loading...</p>;

	return (
		<div className={styles.userList}>
			<UserItem
				name={data[data.length - 1]?.username}
				description={data[data.length - 1]?.username}
				action="Switch"
				img={data[data.length - 1]?.avatar}
				style={{ width: 55, height: 55 }}
				to={data[data.length - 1]?.username}
			/>
			<div className={styles.suggestions}>
				<span>Suggestions for you</span>
				<a href="#">See All</a>
			</div>
			{data.map((post) => (
				<UserItem
					name={post.username}
					description={post.username}
					action={!isFollowing ? "Follow" : "Unfollow"}
					img={post.avatar}
					setIsFollowing={() => setIsFollowing(!isFollowing)}
					to={post.username}
				/>
			))}

			<UserListFooter />
		</div>
	);
};

export default UserList;
