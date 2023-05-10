import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import {
    BsThreeDots,
    RiArrowLeftSLine,
    RiArrowRightSLine,
} from "react-icons/all";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { getPostById } from "../../api";
import CommentForm from "../CommentForm";
import Modal from "../UI/Modal";
import PostActions from "../PostActions";
import ProfilePopup from "../ProfilePopup";
import Spinner from "../UI/Spinner";
import NotFound from "../NotFound";
import Popup from "../UI/Popup";
import OptionsModal from "../UI/OptionsModal";
import Tooltip from "../UI/Tooltip";
import { getLocalStorage } from "../Post/Post";
import CommentList from "../CommentList";
import styles from "./PostModal.module.scss";

dayjs.extend(relativeTime);

const PostModal = () => {
    // const [index, setIndex] = useState(0);
    const [viewAllComments, setViewAllComments] = useState(false);
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState<string[]>(getLocalStorage());
    const [openPostModal, setOpenPostModal] = useState(false);

    useEffect(() => {
        localStorage.setItem("comments", JSON.stringify(comments));
    }, [comments]);

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

    // const checkNumber = (number: number) => {
    // 	if (number > posts.length - 1) return 0;
    // 	if (number < 0) return posts.length - 1;
    // };

    // const prevPost = () => {
    // 	setIndex((index) => {
    // 		let newIndex = index + 1;
    // 		return checkNumber(newIndex);
    // 	});
    // };
    // const nextPost = () => {
    // 	setIndex((index) => {
    // 		let newIndex = index - 1;
    // 		return checkNumber(newIndex);
    // 	});
    // };

    return (
        <div onClick={() => navigate("/")}>
            <Modal setOpenModal={() => navigate("/")} background="black">
                <div className={styles.wrapper}>
                    <div className={styles.postImg}>
                        <img
                            src={post.image}
                            alt={post.authorProfile.username}
                        />
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
                                            alt={post.authorProfile.username}
                                        />
                                        <span>
                                            {post.authorProfile.username}
                                        </span>
                                    </div>
                                </Link>
                            </Popup>
                            <BsThreeDots
                                onClick={() => setOpenPostModal(true)}
                            />
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
                            <PostActions
                                avatar={post.authorProfile.avatar}
                                id={post.authorProfile.id}
                                username={post.authorProfile.username}
                            />
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
                        <Tooltip content="Next">
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
