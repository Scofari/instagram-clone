import Modal from "../Modal";
import SVGMedia from "./SVGMedia";
import styles from "./CreateModal.module.scss";
import Button from "../UI/Button";

interface CreateModalProps {
	setOpenModal: (x: boolean) => void;
}

const CreateModal = ({ setOpenModal }: CreateModalProps) => {
	return (
		<Modal
			setOpenModal={setOpenModal}
			title="Create new post"
			style={{ width: "500px", height: "560px" }}
		>
			<div className={styles.modalContent}>
				<SVGMedia />
				<p>Drag photos and videos here</p>
				<Button text="Select from computer" />
			</div>
		</Modal>
	);
};

export default CreateModal;
