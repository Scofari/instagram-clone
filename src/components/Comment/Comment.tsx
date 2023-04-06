import { useContext } from "react";
import CommentForm from "../CommentForm";
import Modal from "../Modal";
import Post from "../Post";
import PostActions from "../PostActions";
import styles from "./Comment.module.scss";

const Comment = () => {
	return (
		<div>
			<Modal
				setOpenModal={() => ""}
				title="Comment Header"
				style={{ width: "1200px", height: "660px" }}
			>
				<h1>Hello</h1>
				<div style={{ width: 520 }}>
					<PostActions />
					<CommentForm />
				</div>
			</Modal>
		</div>
	);
};

export default Comment;
