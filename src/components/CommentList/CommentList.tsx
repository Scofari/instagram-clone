import { useState } from "react";
import { Comment } from "../index";
import styles from "./CommentList.module.scss";

interface Props {
  viewAllComments: boolean;
  setViewAllComments: React.Dispatch<React.SetStateAction<boolean>>;
  comments: string[];
}

const CommentList = ({
  viewAllComments,
  setViewAllComments,
  comments,
}: Props) => {
  const [index, setIndex] = useState(4);

  const showAllComments = () => {
    setViewAllComments(!viewAllComments);
    setIndex(index === 4 ? comments.length : 4);
  };

  return (
    <>
      {comments.slice(0, index).map((comment, index) => {
        return <Comment key={index} comment={comment} />;
      })}

      {comments.length > 4 && (
        <button className={styles.button} onClick={showAllComments}>
          {!viewAllComments
            ? `View all ${comments.length} comments`
            : `Hide all comments`}
        </button>
      )}
    </>
  );
};

export default CommentList;
