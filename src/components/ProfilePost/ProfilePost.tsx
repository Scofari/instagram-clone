import React from "react";
import styles from "./ProfilePost.module.scss";

type Props = {
	src: string;
};

const ProfilePost = ({ src }: Props) => {
	return <img className={styles.img} src={src} alt="image" />;
};

export default ProfilePost;
