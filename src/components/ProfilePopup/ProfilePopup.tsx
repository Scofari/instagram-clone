import { FC } from "react";
import Button from "./../UI/Button/Button";
import styles from "./ProfilePopup.module.scss";

const ProfilePopup: FC<{ username: string }> = ({ username }) => {
    return (
        <div className={styles.container}>
            <Button text="Message" />
            <Button text="Following" />
        </div>
    );
};

export default ProfilePopup;
