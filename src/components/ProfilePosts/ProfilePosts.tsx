import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IUserPost } from "../../types/user.interface";
import styles from "./ProfilePosts.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

interface ProfilePostsProps {
	userId?: number;
}

const ProfilePosts: FC<ProfilePostsProps> = ({ userId }) => {
	const posts = useSelector((state: RootState) => state.post.posts);

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
