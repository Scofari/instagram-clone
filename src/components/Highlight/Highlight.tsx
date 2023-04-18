import React, { useState } from "react";
import { IconType } from "react-icons/lib";
import HighlightInput from "../UI/HighlightInput";
import Modal from "../UI/Modal";
import Tooltip from "../UI/Tooltip";
import styles from "./Highlight.module.scss";

interface HighlightProps {
    icon: IconType;
    text: string;
}

const Highlight = ({ icon: Icon, text }: HighlightProps) => {
    const [openModal, setOpenModal] = useState(false);

    return (
        <>
            <Tooltip content="Plus icon">
                <div
                    className={styles.highlight}
                    onClick={() => setOpenModal(true)}
                >
                    <div className={styles.circle}>
                        <Icon />
                    </div>
                    <span>{text}</span>
                </div>
            </Tooltip>
            {openModal && (
                <Modal
                    title="New Highlight"
                    setOpenModal={setOpenModal}
                    isDefaultClose
                >
                    <div className={styles.modalContent}>
                        <HighlightInput />
                    </div>
                </Modal>
            )}
        </>
    );
};

export default Highlight;
