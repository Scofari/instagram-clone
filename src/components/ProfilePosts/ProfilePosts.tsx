import { Dispatch, FC, SetStateAction, useState } from "react";
import { Link } from "react-router-dom";
import { IUserPost } from "../../types/user.interface";
import styles from "./ProfilePosts.module.scss";

interface ProfilePostsProps {
	posts: IUserPost[];
	userId?: number;
}

const ProfilePosts: FC<ProfilePostsProps> = ({ posts, userId }) => {
	return (
		<div className={styles.posts}>
			{posts?.map((post) => {
				const { id, src } = post;
				return (
					<Link to={`/p/${userId}`} key={id}>
						<img src={src} alt="post" />
					</Link>
				);
			})}
		</div>
	);
};

export default ProfilePosts;
