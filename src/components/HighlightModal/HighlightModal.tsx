import Modal from "../UI/Modal";
import HighlightInput from "../../HighlightInput";
import styles from "./HighlightModal.module.scss";

const HighlightModal = () => {
    return (
        <Modal
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
