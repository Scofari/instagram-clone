import { IoIosSettings } from "react-icons/io";
import Button from "./../UI/Button";
import Tooltip from "../UI/Tooltip";
import styles from "./ProfileHeader.module.scss";
import { IUser } from "../../types/user.interface";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const ProfileHeader = ({
    avatar,
    username,
    postsCount,
    followersCount,
    followingCount,
    status,
}: IUser) => {
    const currentUser = useSelector(
        (state: RootState) => state.app.currentUser
    );
    const isMyProfile = username === currentUser?.username;

    return (
        <header className={styles.profileHeader}>
            <Tooltip content="Change profile photo">
                <div className={styles.userAvatar}>
                    <img src={avatar} alt="avatar" />
                </div>
            </Tooltip>

            <div className={styles.infoProfile}>
                <div className={styles.editProfile}>
                    <h2>{username}</h2>
                    {isMyProfile ? (
                        <Button variant="secondary" text={"Edit profile"} />
                    ) : (
                        <>
                            <Button variant="primary" text={"Follow"} />
                            <Button variant="secondary" text="Message" />
                        </>
                    )}

                    <Tooltip content="Options">
                        <IoIosSettings />
                    </Tooltip>
                </div>
                <ul>
                    <li>
                        <span>{postsCount}</span> posts
                    </li>
                    <li>
                        <span>{followersCount}</span> followers
                    </li>
                    <li>
                        <span>{followingCount}</span> following
                    </li>
                </ul>
                <div className={styles.description}>
                    <span>{username}</span>
                    <h1>
                        {status}
                        <br />
                    </h1>
                    <a href="https://band.link/tdtin" target={"_blank"}>
                        band.link/tdtin
                    </a>
                </div>
            </div>
        </header>
    );
};

export default ProfileHeader;
