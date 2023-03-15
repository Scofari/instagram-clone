import React, { ReactNode } from "react";
import styles from "./Modal.module.scss";
import ReactDOM from "react-dom";

interface ModalProps {
	open: boolean;
	onClose: () => void;
	children: ReactNode;
	style: React.CSSProperties;
	title?: string;
	highlight?: boolean;
}

const Modal = ({
	children,
	open,
	onClose,
	title,
	style,
	highlight,
}: ModalProps) => {
	if (!open) return null;

	return ReactDOM.createPortal(
		<div className={styles.overlay}>
			{!highlight && <span className={styles.close}>&times;</span>}
			<div className={styles.modal} style={style}>
				{!highlight ? (
					<>
						<h1>{title}</h1> {children}
					</>
				) : (
					<>{children}</>
				)}
			</div>
		</div>,
		document.getElementById("portal") as HTMLElement
	);
};

export default Modal;
