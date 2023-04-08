import { FC } from "react";
import { useQuery } from "@tanstack/react-query";
import Post from "../Post";
import Skeleton from "../Skeleton";
import { IPost } from "../../types/post.interface";
import styles from "./PostsList.module.scss";
import { getAllPosts } from "../../api";

const PostsList: FC = () => {
  const { data = [], isLoading } = useQuery(["posts"], getAllPosts);

  return (
    <div className={styles.postsList}>
      {isLoading ? (
        <Skeleton />
      ) : (
        !!data.length &&
        data.map((post: IPost) => <Post post={post} key={post.id} />)
      )}
    </div>
  );
};

export default PostsList;
