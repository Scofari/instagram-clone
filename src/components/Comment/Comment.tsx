import { useState } from "react";
import { FiHeart } from "react-icons/fi";
import { Tooltip } from "../UI";
import { useCurrentUser } from "../../hooks/useCurrentUser";
import styles from "./Comment.module.scss";

interface Props {
  comment: string;
}

const Comment = ({ comment }: Props) => {
  const [isLiked, setIsLiked] = useState(false);
  const { data: currentUser } = useCurrentUser();

  return (
    <div className={styles.comment}>
      <p>
        <span>{currentUser?.username}</span>
        {comment}
      </p>
      <Tooltip content={isLiked ? "Unlike" : "Like"}>
        <FiHeart
          className={isLiked ? styles.heartIcon : ""}
          onClick={() => setIsLiked(!isLiked)}
        />
      </Tooltip>
    </div>
  );
};

export default Comment;
