import { FC } from "react";
import { Link, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import styles from "./ProfilePosts.module.scss";

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
			<Outlet />
		</div>
	);
};

export default ProfilePosts;
