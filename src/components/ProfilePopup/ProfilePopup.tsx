import Profile from "../Profile/Profile";
import styles from "./ProfilePopup.module.scss";
import Button from "./../UI/Button/Button";

const ProfilePopup = () => {
	return (
		<div className={styles.container}>
			<Button text="Message" />
			<Button text="Following" />
		</div>
	);
};

export default ProfilePopup;
