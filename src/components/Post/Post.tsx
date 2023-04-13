import { Link } from "react-router-dom";
import { IPost } from "../../types/post.interface";
import CommentForm from "../CommentForm";
import PostActions from "../PostActions/PostActions";
import HeaderPost from "./../HeaderPost";
import styles from "./Post.module.scss";
// import { useEffect } from "react";
// import { useAppDispatch } from "../../redux/store";
// import { setPost } from "../../redux/postSlice";

interface PostProps {
	post: IPost;
}

const Post = ({ post }: PostProps) => {
	const { avatar, username, description, likes } = post;
	// const dispatch = useAppDispatch();
	// useEffect(() => {
	// 	dispatch(setPost(post));
	// }, [username]);
	return (
		<div className={styles.wrapper}>
			<HeaderPost {...post} />
			<div className={styles.cover}>
				<img src={avatar} alt="cover" />
			</div>
			<PostActions {...post} />
			<span>{likes} likes</span>
			<p>
				<span>
					<Link to={`/${username}`}>{username}</Link>
				</span>
				{description}
			</p>
			<CommentForm />
		</div>
	);
};

export default Post;
