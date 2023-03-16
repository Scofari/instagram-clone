import ReactDOM from "react-dom";
import React, { ReactNode } from "react";
import styles from "./Modal.module.scss";

interface ModalProps {
	children: ReactNode;
	style: React.CSSProperties;
	setOpenModal: (x: boolean) => void;
	title?: string;
	highlight?: boolean;
}

const Modal = ({
	children,
	title,
	style,
	highlight,
	setOpenModal,
}: ModalProps) => {
	console.log("open: ", open);

	return ReactDOM.createPortal(
		<div className={styles.overlay}>
			<div className={styles.modal} style={style}>
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
