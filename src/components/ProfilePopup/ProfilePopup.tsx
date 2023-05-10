import { FC } from "react";
import { TbBrandMessenger, MdOutlinePersonAdd } from "react-icons/all";
import { Link } from "react-router-dom";
import { IAuthorProfile } from "../../types/author-profile.interface";
import Button from "./../UI/Button/Button";
import styles from "./ProfilePopup.module.scss";

interface ProfilePopupProps extends IAuthorProfile {
    isSuggested?: boolean;
    isFollowing?: boolean;
    setIsFollowing?: (x: boolean) => void;
}

const ProfilePopup: FC<ProfilePopupProps> = ({
    username,
    avatar,
    followersCount,
    followingCount,
    postsCount,
    latestPosts,
    isSuggested,
    isFollowing,
    setIsFollowing,
    id: userId,
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
                    console.log(
                        "🚀 ~ file: ProfilePopup.tsx:48 ~ {latestPosts?.map ~ id:",
                        id
                    );

                    return (
                        <Link to={`/p/${userId}`} key={id}>
                            <img src={src} />
                        </Link>
                    );
                })}
            </div>

            <div className={styles.actionBtns}>
                {!isSuggested ? (
                    <>
                        <Button
                            icon={TbBrandMessenger}
                            variant="primary"
                            size="medium"
                        >
                            Message
                        </Button>
                        <Button size="medium">Following</Button>
                    </>
                ) : (
                    <Button
                        icon={!isFollowing ? MdOutlinePersonAdd : undefined}
                        size="large"
                        variant={isFollowing ? "secondary" : "primary"}
                        onClick={() => setIsFollowing?.(!isFollowing)}
                    >
                        {isFollowing ? "Following" : "Follow"}
                    </Button>
                )}
            </div>
        </div>
    );
};

export default ProfilePopup;
