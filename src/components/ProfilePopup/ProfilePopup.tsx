import { FC } from "react";
import Button from "./../UI/Button/Button";
import styles from "./ProfilePopup.module.scss";
import { IAuthorProfile } from "../../types/author-profile.interface";
import { Link } from "react-router-dom";

const ProfilePopup: FC<IAuthorProfile> = ({
    username,
    avatar,
    followersCount,
    followingCount,
    postsCount,
    latestPosts,
}) => {
    return (
        <div className={styles.container}>
            <Link to={`/${username}`}>
                <div className={styles.avatar}>
                    <img src={avatar} alt="avatar" />
                    <span>{username}</span>
                </div>
            </Link>
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

            <div className={styles.posts}>
                {latestPosts?.map((post, idx) => (
                    <Link to={"."} key={idx}>
                        <img src={post} />
                    </Link>
                ))}
            </div>

            <Button text="Message" />
            <Button text="Following" />
        </div>
    );
};

export default ProfilePopup;
