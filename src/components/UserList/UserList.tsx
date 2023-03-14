import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import { IPost } from "../../@types/post.interface";
import { PostService } from "../../services/posts.service";
import UserItem from "../UserItem";
import UserListFooter from "../UserListFooter";
import styles from "./UserList.module.scss";

const UserList = () => {
	const { data = [] } = useQuery<IPost[]>(["posts"], () =>
		PostService.getAll()
	);

	console.log("data: ", data);
	const [isFollowing, setIsFollowing] = useState(false);

	return (
		<div className={styles.userList}>
			<UserItem
				username={data[data.length - 1]?.username}
				description={data[data.length - 1]?.username}
				action="Switch"
				avatar={data[data.length - 1]?.avatar}
				style={{ width: 55, height: 55 }}
				to={data[data.length - 1]?.username}
			/>
			<div className={styles.suggestions}>
				<span>Suggestions for you</span>
				<a href="#">See All</a>
			</div>
			{!!data.length &&
				data.map((post) => (
					<UserItem
						key={post.id}
						{...post}
						to={post.username}
						description={post.username}
						setIsFollowing={() => setIsFollowing(!isFollowing)}
						action={!isFollowing ? "Follow" : "Unfollow"}
					/>
				))}

			<UserListFooter />
		</div>
	);
};

export default UserList;
