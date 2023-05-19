import { FC } from "react";
import { Link } from "react-router-dom";
import styles from "./ProfileContent.module.scss";

const ProfileContent: FC<{ posts: string[] }> = ({ posts }) => {
	return (
		<div className={styles.posts}>
			{posts?.map((post, idx) => (
				<Link to={"."} key={idx}>
					<img className={styles.img} src={post} alt="image" />
				</Link>
			))}
		</div>
	);
};

export default ProfileContent;
