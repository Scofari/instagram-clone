import { Link } from "react-router-dom";
import { IPost } from "../../types/post.interface";
import CommentForm from "../CommentForm";
import PostActions from "../PostActions/PostActions";
import HeaderPost from "./../HeaderPost";
import styles from "./Post.module.scss";

const Post = ({
	authorProfile,
	description,
	image,
	likes,
	dateTime,
}: IPost) => {
	return (
		<article className={styles.post}>
			<HeaderPost authorProfile={authorProfile} dateTime={dateTime} />
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
		</article>
	);
};

export default Post;
