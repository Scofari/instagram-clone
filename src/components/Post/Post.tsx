import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  CommentForm,
  CommentList,
  ExpandableText,
  HeaderPost,
  PostActions,
} from "../../components";
import { IPost } from "../../types/post.interface";
import {
  addCommentToLocalStorage,
  getCommentFromLocalStorage,
} from "../../utils/localStorage";
import styles from "./Post.module.scss";
import { loremText } from "../../../public/loremText";

const Post = ({ authorProfile, status, image, likes, dateTime }: IPost) => {
  const [viewAllComments, setViewAllComments] = useState(false);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<string[]>(() =>
    getCommentFromLocalStorage()
  );

  useEffect(() => {
    addCommentToLocalStorage(comments);
  }, [comments]);

  return (
    <article className={styles.post}>
      <HeaderPost authorProfile={authorProfile} dateTime={dateTime} />
      <div className={styles.cover}>
        <img src={image} alt="cover" />
      </div>
      <PostActions id={authorProfile.id} />
      <span>{likes} likes</span>
      <p>
        <span>
          <Link to={`/${authorProfile.username}`}>
            {authorProfile.username}
          </Link>
        </span>
        <ExpandableText
          maxChars={status.length}
        >{`${status} ${loremText}`}</ExpandableText>
      </p>

      <CommentList
        comments={comments}
        setViewAllComments={setViewAllComments}
        viewAllComments={viewAllComments}
      />

      <CommentForm
        comment={comment}
        comments={comments}
        setComment={setComment}
        setComments={setComments}
      />
    </article>
  );
};

export default Post;
