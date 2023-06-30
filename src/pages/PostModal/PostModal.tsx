import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useEffect, useState } from "react";
import {
  BsThreeDots,
  RiArrowLeftSLine,
  RiArrowRightSLine,
} from "react-icons/all";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  CommentForm,
  CommentList,
  PostActions,
  ProfilePopup,
} from "../../components";
import {
  Modal,
  OptionsModal,
  Popup,
  Spinner,
  Tooltip,
} from "../../components/UI";
import { usePost } from "../../hooks/usePost";
import { NotFound } from "../../pages";
import {
  addCommentToLocalStorage,
  getCommentFromLocalStorage,
} from "../../utils/localStorage";
import styles from "./PostModal.module.scss";

dayjs.extend(relativeTime);

const PostModal = () => {
  const [viewAllComments, setViewAllComments] = useState(false);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<string[]>(
    getCommentFromLocalStorage()
  );
  const [openPostModal, setOpenPostModal] = useState(false);

  useEffect(() => {
    addCommentToLocalStorage(comments);
  }, [comments]);

  const { id } = useParams();
  const navigate = useNavigate();

  if (!id) return null;

  const { data: post, isLoading } = usePost(id);

  if (isLoading) return <Spinner />;
  if (!post) return <NotFound />;

  const date = dayjs(post.dateTime);
  const relativeDate = date.fromNow();
  const dateTooltip = date.format("MMM DD, YYYY");

  return (
    <div onClick={() => navigate("/")}>
      <Modal setOpenModal={() => navigate("/")} background="black">
        <div className={styles.wrapper}>
          <div className={styles.postImg}>
            <img src={post.image} alt={post.authorProfile.username} />
          </div>
          <div className={styles.modalContent}>
            <div className={styles.post}>
              <Popup content={<ProfilePopup {...post.authorProfile} />}>
                <Link to={`/${post.authorProfile.username}`}>
                  <div className={styles.avatar}>
                    <img
                      src={post.authorProfile.avatar}
                      alt={post.authorProfile.username}
                    />
                    <span>{post.authorProfile.username}</span>
                  </div>
                </Link>
              </Popup>
              <BsThreeDots onClick={() => setOpenPostModal(true)} />
            </div>

            {comments ? (
              <div className={styles.commentList}>
                <CommentList
                  comments={comments}
                  setViewAllComments={setViewAllComments}
                  viewAllComments={viewAllComments}
                />
              </div>
            ) : (
              <div className={styles.noComments}>
                <h3>No comments yet.</h3>
                <p>Start the conversation.</p>
              </div>
            )}

            <div className={styles.footerModal}>
              <PostActions id={post.authorProfile.id} />
              <span>{post.likes} likes</span>
              <time dateTime={post.dateTime} title={dateTooltip}>
                {relativeDate}
              </time>
              <CommentForm
                isModalOpen
                comment={comment}
                comments={comments}
                setComment={setComment}
                setComments={setComments}
              />
            </div>
          </div>

          <div className={styles.arrowRight}>
            <Tooltip content="Next">
              <RiArrowRightSLine />
            </Tooltip>
          </div>
          <div className={styles.arrowLeft}>
            <Tooltip content="Prev">
              <RiArrowLeftSLine />
            </Tooltip>
          </div>
        </div>
      </Modal>
      {openPostModal && <OptionsModal setOpenModal={setOpenPostModal} />}
    </div>
  );
};

export default PostModal;
