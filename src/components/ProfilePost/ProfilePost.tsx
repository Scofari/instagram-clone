import styles from "./ProfilePost.module.scss";

type Props = {
	src?: string;
};

const ProfilePost = ({ src }: Props) => {
	console.log("src: ", src);
	return <img className={styles.img} src={src} alt="image" />;
};

export default ProfilePost;
