import { Link } from "react-router-dom";
import { IPost } from "../../types/post.interface";
import CommentForm from "../CommentForm";
import PostActions from "../PostActions/PostActions";
import HeaderPost from "./../HeaderPost";
import styles from "./Post.module.scss";

// interface PostProps {
// 	post: IPost;
// }

const Post = ({ authorProfile, description, image, likes }: IPost) => {
	// const { description, likes, authorProfile, image } = post;

	return (
		<div className={styles.wrapper}>
			<HeaderPost authorProfile={authorProfile} />
			<div className={styles.cover}>
				<img src={image} alt="cover" />
			</div>
			<PostActions {...authorProfile} />
			<span>{likes} likes</span>
			<p>
				<span>
					<Link to={`/${authorProfile.username}`}>
						{authorProfile.username}
					</Link>
				</span>
				{description}
			</p>
			<CommentForm />
		</div>
	);
};

export default Post;
