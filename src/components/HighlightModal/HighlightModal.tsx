import Modal from "../UI/Modal";
import HighlightInput from "../../HighlightInput";
import styles from "./HighlightModal.module.scss";

type HighlightModalProps = {
	setOpenModal: (x: boolean) => void;
};

const HighlightModal = ({ setOpenModal }: HighlightModalProps) => {
	return (
		<Modal
			setOpenModal={setOpenModal}
			highlight
			title="New Highlight"
			style={{ width: "400px", height: "170px" }}
		>
			<div className={styles.modalContent}>
				<HighlightInput />
			</div>
		</Modal>
	);
};

export default HighlightModal;
