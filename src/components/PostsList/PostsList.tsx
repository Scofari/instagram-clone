import { useEffect, useState } from "react";
import avatar from "../../assets/vova.jpg";

import Post from "../Post";
import Skeleton from "../Skeleton";

type IPosts = {
    avatar: string;
    comment: string;
    dateTime: string;
    id: number;
    likes: string;
    title: string;
    username: string;
};

import styles from "./PostsList.module.scss";

const PostsList = () => {
    const [posts, setPosts] = useState<IPosts[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:3000/posts")
            .then((res) => res.json())
            .then((json) => setPosts(json))
            .catch((error) => {
                console.error(error);
                alert("Something went wrong");
            })
            .finally(() => setIsLoading(false));
    }, []);

    return (
        <div className={styles.postsList}>
            {isLoading ? (
                <Skeleton />
            ) : (
                posts.map((post: IPosts, index) => (
                    <Post {...post} key={index} />
                ))
            )}
        </div>
    );
};

export default PostsList;
