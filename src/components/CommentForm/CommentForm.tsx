import {
  Dispatch,
  FC,
  FormEvent,
  SetStateAction,
  useEffect,
  useRef,
} from "react";
import { BsEmojiSmile } from "react-icons/all";
import { Tooltip } from "../../components/UI";
import styles from "./CommentForm.module.scss";

interface CommentFormProps {
  comment: string;
  comments: string[];
  setComment: Dispatch<SetStateAction<string>>;
  setComments: Dispatch<SetStateAction<string[]>>;
  isModalOpen?: boolean;
}

const CommentForm: FC<CommentFormProps> = ({
  isModalOpen,
  comment = "",
  comments = [],
  setComment,
  setComments,
}) => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const emojiSizeStyle = !isModalOpen ? 13 : 25;

  useEffect(() => {
    const textareaEl = textareaRef.current;
    const onChangeScrollHeight = (e: any) => {
      if (textareaEl && e.target) {
        let scrollHeight = e.target.scrollHeight;
        textareaEl.style.height = `${scrollHeight}px`;
      }
    };
    if (textareaEl) {
      textareaEl.addEventListener("keyup", onChangeScrollHeight);
    }
    return () => {
      if (textareaEl) {
        textareaEl.removeEventListener("keyup", onChangeScrollHeight);
      }
    };
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setComments([...comments, comment]);
    setComment("");
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        {isModalOpen ? (
          <div className={styles.commentForm}>
            <Tooltip content="Emoji">
              <BsEmojiSmile size={emojiSizeStyle} />
            </Tooltip>
            <textarea
              ref={textareaRef}
              value={comment}
              placeholder="Add a comment..."
              onChange={(e) => setComment(e.target.value)}
            />
            <button type="submit">Post</button>
          </div>
        ) : (
          <>
            <textarea
              ref={textareaRef}
              value={comment}
              placeholder="Add a comment..."
              onChange={(e) => setComment(e.target.value)}
            />
            {comment && <button type="submit">Post</button>}
            <Tooltip content="Emoji">
              <BsEmojiSmile size={emojiSizeStyle} />
            </Tooltip>
          </>
        )}
      </form>
    </>
  );
};

export default CommentForm;
