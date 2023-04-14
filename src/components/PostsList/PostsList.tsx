import { FC } from "react";
import { useQuery } from "@tanstack/react-query";
import Post from "../Post";
import PostSkeleton from "./PostSkeleton";
import { IPost } from "../../types/post.interface";
import { getAllPosts } from "../../api";
import styles from "./PostsList.module.scss";

const PostsList: FC = () => {
	const { data = [], isLoading } = useQuery(["posts"], getAllPosts);

	return (
		<div className={styles.postsList}>
			{isLoading ? (
				<>
					<PostSkeleton />
				</>
			) : (
				data.map((post: IPost) => (
					<Post {...post} key={post.authorProfile.id} />
				))
			)}
		</div>
	);
};

export default PostsList;
