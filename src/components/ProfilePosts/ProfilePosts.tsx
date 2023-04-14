import { FC } from "react";
import { Link } from "react-router-dom";
import { IUserPost } from "../../types/user.interface";
import styles from "./ProfilePosts.module.scss";

interface ProfilePostsProps {
	posts: IUserPost[];
}

const ProfilePosts: FC<ProfilePostsProps> = ({ posts }) => {
	return (
		<div className={styles.posts}>
			{posts?.map((post) => {
				const { id, src } = post;
				return (
					<Link to={"."} key={id}>
						<img src={src} alt="post" />
					</Link>
				);
			})}
		</div>
	);
};

export default ProfilePosts;
