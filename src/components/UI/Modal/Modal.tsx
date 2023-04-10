import ReactDOM from "react-dom";
import React, { ReactNode, useContext } from "react";
import styles from "./Modal.module.scss";
import { ModalContext } from "../../../providers/ModalContext";

interface ModalProps {
    children: ReactNode;
    style: React.CSSProperties;
    title?: string | ReactNode;
    highlight?: boolean;
}

const Modal = ({ children, title, style }: ModalProps) => {
    const { setOpenModal } = useContext(ModalContext);

    return ReactDOM.createPortal(
        <div className={styles.overlay} onClick={() => setOpenModal(false)}>
            <div
                className={styles.modal}
                style={style}
                onClick={(e) => e.stopPropagation()}
            >
                <div className={styles.title}>
                    <h1>{title}</h1>
                    <span
                        className={styles.close}
                        onClick={() => setOpenModal(false)}
                    >
                        &times;
                    </span>
                </div>
                {children}
            </div>
        </div>,
        document.getElementById("portal") as HTMLElement
    );
};

export default Modal;
