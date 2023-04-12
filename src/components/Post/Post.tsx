import { Link } from "react-router-dom";
import { IPost } from "../../types/post.interface";
import CommentForm from "../CommentForm";
import PostActions from "../PostActions/PostActions";
import HeaderPost from "./../HeaderPost";
import styles from "./Post.module.scss";
import { useEffect } from "react";
import { useAppDispatch } from "../../redux/store";
import { setPost } from "../../redux/postSlice";

interface PostProps {
	post: IPost;
}

const Post = ({ post }: PostProps) => {
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(setPost(post));
	}, [post]);
	return (
		<div className={styles.wrapper}>
			<HeaderPost {...post} />
			<div className={styles.cover}>
				<img src={post.avatar} alt="cover" />
			</div>
			<PostActions />
			<span>{post.likes} likes</span>
			<p>
				<span>
					<Link to={`/${post.username}`}>{post.username}</Link>
				</span>
				{post.description}
			</p>
			<CommentForm />
		</div>
	);
};

export default Post;
