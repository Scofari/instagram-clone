import { FC } from "react";
import { Link } from "react-router-dom";
import ProfilePost from "../ProfilePost";
import { IUser } from "../../types/user.interface";
import styles from "./ProfileContent.module.scss";

const ProfileContent: FC<IUser> = ({ content }) => {
	console.log("content: ", content);
	return (
		<div className={styles.content}>
			{content?.map((post, idx) => (
				<Link to={"."} key={idx}>
					<ProfilePost src={post} />
				</Link>
			))}
		</div>
	);
};

export default ProfileContent;
