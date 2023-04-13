import { useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import CommentForm from "../CommentForm";
import Modal from "../UI/Modal";
import PostActions from "../PostActions";
import Tooltip from "../UI/Tooltip";
import ProfilePopup from "../ProfilePopup";
import styles from "./PostModal.module.scss";
import { BsThreeDots } from "react-icons/bs";
import { useQuery } from "@tanstack/react-query";
import { getPostById } from "../../api";
import Spinner from "../UI/Spinner";
import NotFound from "../NotFound";
// import { useQuery } from "@tanstack/react-query";
// import { getUserByUsername } from "../../api";

const PostModal = () => {
    const { id } = useParams();

    const { data: post, isLoading } = useQuery(
        ["posts", id],
        () => getPostById(Number(id)),
        { enabled: !!id }
    );

    console.log(post);

    const navigate = useNavigate();

    if (isLoading) return <Spinner />;
    if (!post) return <NotFound />;

    return (
        <div onClick={() => navigate("/")}>
            <Modal
                setOpenModal={() => navigate("/")}
                background="black"
                // sizeModal={styles.sizeModal}
            >
                <div className={styles.wrapper}>
                    <div className={styles.postImg}>
                        <img src={post.avatar} alt="avatar" />
                    </div>
                    <div className={styles.modalContent}>
                        <h1>Hello</h1>
                        <div className={styles.post}>
                            <Tooltip
                                content={
                                    <ProfilePopup {...post.authorProfile} />
                                }
                            >
                                <Link to={`/${post.username}`}>
                                    <div className={styles.avatar}>
                                        <img
                                            src={post.authorProfile.avatar}
                                            alt="avatar"
                                        />
                                        <span>{post.username}</span>
                                    </div>
                                </Link>
                            </Tooltip>
                            <BsThreeDots />
                        </div>

                        <div className={styles.footerModal}>
                            <PostActions
                                avatar={post.authorProfile.avatar}
                                id={post.id}
                                username={post.username}
                            />
                            <CommentForm />
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default PostModal;
