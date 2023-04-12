import ReactDOM from "react-dom";
import { ReactNode } from "react";
import styles from "./Modal.module.scss";

interface ModalProps {
    children: ReactNode;
    setOpenModal: (x: boolean) => void;
    title?: string | ReactNode;
    highlight?: boolean;
    sizeModal?: string;
}

const Modal = ({ children, title, setOpenModal, sizeModal }: ModalProps) => {
    return ReactDOM.createPortal(
        <div className={styles.overlay} onClick={() => setOpenModal(false)}>
            <div
                className={`${styles.modal} ${sizeModal}`}
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
