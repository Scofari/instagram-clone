import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
	console.log("post: ", post);
	if (!post) return null;
	const { username, avatar } = post;
	const [openModal, setOpenModal] = useState(false);
	const navigate = useNavigate();

	return (
		<div onClick={() => navigate(-1)}>
			{!openModal && (
				<Modal
					setOpenModal={setOpenModal}
					title="Comment Header"
					sizeModal={styles.sizeModal}
				>
					<div className={styles.modalContent}>
						<h1>Hello</h1>
						<div className={styles.post}>
							<Tooltip content={<ProfilePopup />}>
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
				</Modal>
			)}
		</div>
	);
};

export default Comment;
