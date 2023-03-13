import { useEffect, useState } from "react";
import axios from "axios";
import Post from "../Post";
import Skeleton from "../Skeleton";
import { IPost } from "../../@types/posts";

import styles from "./PostsList.module.scss";
import { PostService } from "../../services/posts.service";

const PostsList = () => {
	const [posts, setPosts] = useState<IPost[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await PostService.getAll();

				setPosts(data);
			} catch (error) {
				console.error(error);
				alert("Something went wrong");
			} finally {
				setIsLoading(false);
			}
		};

		fetchData();
	}, []);

	return (
		<div className={styles.postsList}>
			{isLoading ? (
				<Skeleton />
			) : (
				posts.map((post: IPost, index) => (
					<Post {...post} key={index} />
				))
			)}
		</div>
	);
};

export default PostsList;
