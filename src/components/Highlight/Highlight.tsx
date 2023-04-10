import React, { useState, useEffect, useContext } from "react";
import { IconType } from "react-icons/lib";
import HighlightInput from "../../HighlightInput";
import { ModalContext } from "../../providers/ModalContext";
import HighlightModal from "../HighlightModal";
import Modal from "../UI/Modal";
import Tooltip from "../UI/Tooltip";
import styles from "./Highlight.module.scss";

interface HighlightProps {
    icon: IconType;
    text: string;
    style?: React.CSSProperties;
}

const Highlight = ({ icon: Icon, style, text }: HighlightProps) => {
    const { openModal, setOpenModal } = useContext(ModalContext);

    return (
        <>
            <Tooltip content="Plus icon">
                <div
                    className={styles.highlight}
                    onClick={() => setOpenModal(true)}
                >
                    <div className={styles.circle}>
                        <Icon style={style} />
                    </div>
                    <span>{text}</span>
                </div>
            </Tooltip>
            {openModal && (
                <Modal
                    highlight
                    title="New Highlight"
                    style={{ width: "400px", height: "170px" }}
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
