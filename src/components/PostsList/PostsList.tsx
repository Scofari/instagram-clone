import { FC } from "react";
import { useQuery } from "@tanstack/react-query";
import Post from "../Post";
import PostSkeleton from "./PostSkeleton";
import { IPost } from "../../types/post.interface";
import styles from "./PostsList.module.scss";
import { getAllPosts } from "../../api";
import { CircularProgress } from "@mui/material";

const PostsList: FC = () => {
	const { data = [], isLoading } = useQuery(["posts"], getAllPosts);

	return (
		<div className={styles.postsList}>
			{isLoading ? (
				<>
					<div className={styles.progress}>
						<CircularProgress size={70} />
					</div>
					<PostSkeleton />
				</>
			) : (
				!!data.length &&
				data.map((post: IPost) => <Post post={post} key={post.id} />)
			)}
		</div>
	);
};

export default PostsList;
