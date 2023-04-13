import { useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import CommentForm from "../CommentForm";
import Modal from "../UI/Modal";
import PostActions from "../PostActions";
import Tooltip from "../UI/Tooltip";
import ProfilePopup from "../ProfilePopup";
import styles from "./PostModal.module.scss";
// import { useQuery } from "@tanstack/react-query";
// import { getUserByUsername } from "../../api";

const PostModal = () => {
	const {
		state: { avatar, username, id },
	} = useLocation();
	// const { data: post, isLoading } = useQuery(["users", user], () =>
	// 	getUserByUsername(user)
	// );

	const navigate = useNavigate();
	const [openModal, setOpenModal] = useState(false);

	return (
		<div onClick={() => navigate("/")}>
			{!openModal && (
				<Modal
					setOpenModal={() => navigate("/")}
					title="PostModal Header"
					sizeModal={styles.sizeModal}
				>
					<div style={{ display: "flex" }}>
						<div style={{ width: "100px", flex: 1 }}>
							<img
								style={{ width: "100%" }}
								src={avatar}
								alt=""
							/>
						</div>
						<div className={styles.modalContent}>
							<h1>Hello</h1>
							<div className={styles.post}>
								<Tooltip
									content={
										<ProfilePopup username={username} />
									}
								>
									<Link to={`/${username}`}>
										<div className={styles.avatar}>
											<img src={avatar} alt="avatar" />
											<span>{username}</span>
										</div>
									</Link>
									<h1>header</h1>
								</Tooltip>
							</div>
							<PostActions
								avatar={avatar}
								id={id}
								username={username}
							/>
							<CommentForm />
						</div>
					</div>
				</Modal>
			)}
		</div>
	);
};

export default PostModal;
