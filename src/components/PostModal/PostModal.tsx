import { Link, useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { BsThreeDots } from "react-icons/bs";
import relativeTime from "dayjs/plugin/relativeTime";
import dayjs from "dayjs";
import { getPostById } from "../../api";
import CommentForm from "../CommentForm";
import Modal from "../UI/Modal";
import PostActions from "../PostActions";
import ProfilePopup from "../ProfilePopup";
import Spinner from "../UI/Spinner";
import NotFound from "../NotFound";
import Popup from "../UI/Popup";
import styles from "./PostModal.module.scss";

dayjs.extend(relativeTime);

const PostModal = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const { data: post, isLoading } = useQuery(
        ["posts", id],
        () => getPostById(Number(id)),
        { enabled: !!id }
    );

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
                        <img src={post.image} alt="avatar" />
                    </div>
                    <div className={styles.modalContent}>
                        <div className={styles.post}>
                            <Popup
                                content={
                                    <ProfilePopup {...post.authorProfile} />
                                }
                            >
                                <Link to={`/${post.authorProfile.username}`}>
                                    <div className={styles.avatar}>
                                        <img
                                            src={post.authorProfile.avatar}
                                            alt="avatar"
                                        />
                                        <span>
                                            {post.authorProfile.username}
                                        </span>
                                    </div>
                                </Link>
                            </Popup>
                            <BsThreeDots />
                        </div>

                        <div className={styles.noComments}>
                            <h3>No comments yet.</h3>
                            <p>Start the conversation.</p>
                        </div>

                        <div className={styles.footerModal}>
                            <PostActions
                                avatar={post.authorProfile.avatar}
                                id={post.authorProfile.id}
                                username={post.authorProfile.username}
                            />
                            <span>{post.likes} likes</span>
                            <time dateTime={post.dateTime} title={dateTooltip}>
                                {relativeDate}
                            </time>
                            <CommentForm isModalOpen />
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default PostModal;
