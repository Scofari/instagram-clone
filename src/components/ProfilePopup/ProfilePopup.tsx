import { FC } from "react";
import { useParams } from "react-router-dom";
import Profile from "../Profile/Profile";
import Button from "./../UI/Button/Button";
import { useQuery } from "@tanstack/react-query";
import { PostService } from "../../services/posts.service";
import styles from "./ProfilePopup.module.scss";

const ProfilePopup: FC = () => {
	return (
		<div className={styles.container}>
			<Button text="Message" />
			<Button text="Following" />
		</div>
	);
};

export default ProfilePopup;
