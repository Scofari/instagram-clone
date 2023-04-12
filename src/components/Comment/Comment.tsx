import { useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import CommentForm from "../CommentForm";
import Modal from "../UI/Modal";
import PostActions from "../PostActions";

import styles from "./Comment.module.scss";
import Tooltip from "../UI/Tooltip";
import ProfilePopup from "../ProfilePopup";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const Comment = () => {
    const post = useSelector((state: RootState) => state.post.post);
    const {
        state: { image },
    } = useLocation();

    if (!post) return null;
    const { username, avatar } = post;
    const [openModal, setOpenModal] = useState(false);
    const navigate = useNavigate();

    return (
        <div onClick={() => navigate(-1)}>
            {!openModal && (
                <Modal
                    setOpenModal={() => navigate(-1)}
                    title="Comment Header"
                    sizeModal={styles.sizeModal}
                >
                    <div style={{ display: "flex" }}>
                        <div style={{ width: "100px", flex: 1 }}>
                            <img style={{ width: "100%" }} src={image} alt="" />
                        </div>
                        <div className={styles.modalContent}>
                            <h1>Hello</h1>
                            <div className={styles.post}>
                                <Tooltip
                                    content={<ProfilePopup username="sdf" />}
                                >
                                    <Link to={`/${username}`}>
                                        <div className={styles.avatar}>
                                            <img src={avatar} alt="avatar" />
                                            <span>{username}</span>
                                        </div>
                                    </Link>
                                    {/* <h1>header</h1> */}
                                </Tooltip>
                            </div>
                            <PostActions />
                            <CommentForm />
                        </div>
                    </div>
                </Modal>
            )}
        </div>
    );
};

export default Comment;
