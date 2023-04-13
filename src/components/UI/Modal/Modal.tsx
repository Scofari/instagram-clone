import ReactDOM from "react-dom";
import { ReactNode } from "react";
import styles from "./Modal.module.scss";
import Tooltip from "../Tooltip";

interface ModalProps {
    children: ReactNode;
    setOpenModal: (x: boolean) => void;
    title?: string | ReactNode;
    highlight?: boolean;
    sizeModal?: string;
    background?: "gray" | "black";
}

const Modal = ({
    children,
    title,
    setOpenModal,
    sizeModal,
    background = "gray",
}: ModalProps) => {
    return ReactDOM.createPortal(
        <div className={styles.overlay} onClick={() => setOpenModal(false)}>
            <div
                className={`${styles.modal} ${sizeModal} ${
                    background === "black" ? styles.blackBackground : ""
                }`}
                onClick={(e) => e.stopPropagation()}
            >
                {title && (
                    <div className={styles.title}>
                        <h1>{title}</h1>
                        <span
                            className={styles.close}
                            onClick={() => setOpenModal(false)}
                        >
                            <Tooltip content="Close">&times;</Tooltip>
                        </span>
                    </div>
                )}
                {children}
            </div>
        </div>,
        document.getElementById("portal") as HTMLElement
    );
};

export default Modal;
