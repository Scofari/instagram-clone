import { Link } from "react-router-dom";
import { IPost } from "../../types/post.interface";
import CommentForm from "../CommentForm";
import PostActions from "../PostActions/PostActions";
import { useState } from "react";
import HeaderPost from "./../HeaderPost";
import styles from "./Post.module.scss";

const text = `
	Lorem ipsum dolor sit amet consectetur adipisicing elit.
	Consequatur, quam provident totam id nam cumque! Odio maxime
	sequi deleniti similique ipsam illum temporibus hic minima,
	error ullam iusto praesentium dignissimos soluta quasi
	laudantium labore! Molestiae, nisi? Similique aspernatur officia
	fugit sed optio expedita tempora soluta voluptatem doloremque
	accusamus quisquam fuga, numquam, ipsum laboriosam magnam rem
	veniam quaerat? Laudantium, corrupti explicabo? Id inventore
	necessitatibus, officiis eligendi a temporibus. Laudantium quo,
	assumenda at ratione qui necessitatibus optio, doloribus nihil
	quas repellendus porro ipsum iste numquam labore, dolores
	quisquam consequatur? Asperiores ipsa ducimus accusamus illum
	sunt eligendi, rerum, assumenda aliquam sapiente, dolore
	perferendis voluptates et fugiat ad ipsam? Voluptate perferendis
`;

const Post = ({ authorProfile, status, image, likes, dateTime }: IPost) => {
	const [readMore, setReadMore] = useState(false);

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
				{!readMore
					? `${status}...`
					: `${status} ${text.substring(0, text.length)}`}
				<button onClick={() => setReadMore(!readMore)}>
					{!readMore ? "more" : "show less"}
				</button>
			</p>
			<CommentForm />
		</article>
	);
};

export default Post;
