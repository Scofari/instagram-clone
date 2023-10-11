import { FC } from "react";
import { Post } from "../../components";
import { usePosts } from "../../hooks/usePosts";
import { IPost } from "../../types/post.interface";
import PostSkeleton from "./PostSkeleton";
import styles from "./PostsList.module.scss";

const PostsList: FC = () => {
  const { data: posts, isLoading } = usePosts();

  return (
    <div className={styles.postsList}>
      {isLoading ? (
        <PostSkeleton />
      ) : (
        posts?.map((post: IPost) => (
          <Post {...post} key={post.authorProfile.id} />
        ))
      )}
    </div>
  );
};

export default PostsList;
