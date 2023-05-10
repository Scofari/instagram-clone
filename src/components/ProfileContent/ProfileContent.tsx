import { FC } from "react";
import { Link } from "react-router-dom";
import ProfilePost from "../ProfilePost";
import styles from "./ProfileContent.module.scss";

const ProfileContent: FC<{ posts: string[] }> = ({ posts }) => {
    return (
        <div className={styles.posts}>
            {posts?.map((post, idx) => (
                <Link to={"."} key={idx}>
                    <ProfilePost src={post} />
                </Link>
            ))}
        </div>
    );
};

export default ProfileContent;
