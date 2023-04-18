import { FC } from "react";
import { TbBrandMessenger } from "react-icons/tb";
import Button from "./../UI/Button/Button";
import { Link } from "react-router-dom";
import { IAuthenticate } from "../../types/authenticate.interface";
import styles from "./ProfilePopup.module.scss";

const ProfilePopup: FC<IAuthenticate> = ({
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
                {latestPosts?.map((post) => {
                    const { id, src } = post;

                    return (
                        <Link to={"."} key={id}>
                            <img src={src} />
                        </Link>
                    );
                })}
            </div>

            <div className={styles.actionBtns}>
                <Button icon={TbBrandMessenger} variant="primary" size="medium">
                    Message
                </Button>
                <Button size="medium">Following</Button>
            </div>
        </div>
    );
};

export default ProfilePopup;
