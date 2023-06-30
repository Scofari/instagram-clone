import { FC, useState } from "react";
import { BsChat, FiBookmark, FiHeart, FiSend } from "react-icons/all";
import { useNavigate } from "react-router-dom";
import { Button, Modal, Tooltip } from "../../components/UI";
import styles from "./PostActions.module.scss";

interface PostActionsProps {
  id: number;
}

const PostActions: FC<PostActionsProps> = ({ id }) => {
  const [openModal, setOpenModal] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const navigate = useNavigate();

  return (
    <div className={styles.actions}>
      <Tooltip content={isLiked ? "Unlike" : "Like"}>
        <FiHeart
          onClick={() => setIsLiked(!isLiked)}
          className={isLiked ? styles.heart : ""}
        />
      </Tooltip>
      <span onClick={() => navigate(`/p/${id}`)}>
        <Tooltip content="Comment">
          <BsChat />
        </Tooltip>
      </span>
      <span onClick={() => setOpenModal(true)}>
        <Tooltip content="Share post">
          <FiSend />
        </Tooltip>
      </span>
      {openModal && (
        <Modal title="Share" setOpenModal={setOpenModal} isDefaultClose>
          <div className={styles.share}>
            <div className={styles.modalContent}>
              <div className={styles.to}>
                <span>To:</span>
                <input
                  value={searchValue}
                  type="text"
                  placeholder="Search..."
                  onChange={(e) => setSearchValue(e.target.value)}
                />
              </div>
              <div className={styles.suggested}>
                <span>Suggested</span>
                <div>user1</div>
                <div>user2</div>
                {/* <div className={styles.followerInfo}>
                                    <img src={avatar} alt="avatar" />
                                    <div>
                                        <p>{username}</p>
                                        <span>{description}</span>
                                    </div>
                                </div> */}
              </div>

              <div className={styles.shareBtn}>
                <Button
                  variant="primary"
                  size="large"
                  disabled={!searchValue && true}
                >
                  Send
                </Button>
              </div>
            </div>
          </div>
        </Modal>
      )}

      <Tooltip content={isSaved ? "Remove" : "Save"}>
        <FiBookmark
          onClick={() => setIsSaved(!isSaved)}
          className={isSaved ? styles.bookMark : ""}
        />
      </Tooltip>
    </div>
  );
};

export default PostActions;
