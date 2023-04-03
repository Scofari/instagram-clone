import { BsHeart, BsChat, BsBookmark } from "react-icons/bs";
import { FiSend } from "react-icons/fi";
import { Link } from "react-router-dom";
import { IPost } from "../../@types/post.interface";
import CommentForm from "../CommentForm";
import PostActions from "../PostActions/PostActions";
import Profile from "../Profile";
import Tooltip from "../UI/Tooltip";
import HeaderPost from "./../HeaderPost";
import styles from "./Post.module.scss";

interface PostProps {
	post: IPost;
}

const Post = ({ post }: PostProps) => {
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
				{post.comment}
			</p>
			<CommentForm />
		</div>
	);
};

export default Post;
