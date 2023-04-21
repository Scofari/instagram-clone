import ReactDOM from "react-dom";
import { ReactNode, useEffect } from "react";
import Tooltip from "../Tooltip";
import styles from "./Modal.module.scss";

interface ModalProps {
	children: ReactNode;
	setOpenModal: (x: boolean) => void;
	title?: string | ReactNode;
	background?: "gray" | "black";
	isDefaultClose?: boolean;
}

const Modal = ({
	children,
	title,
	setOpenModal,
	background = "gray",
	isDefaultClose,
}: ModalProps) => {
	useEffect(() => {
		const onEscPress = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				setOpenModal(false);
			}
		};

		document.addEventListener("keyup", onEscPress);

		return () => {
			document.removeEventListener("keyup", onEscPress);
		};
	}, [setOpenModal]);

	return ReactDOM.createPortal(
		<div className={styles.overlay} onClick={() => setOpenModal(false)}>
			<span
				className={styles.mainClose}
				onClick={() => setOpenModal(false)}
			>
				{!isDefaultClose && <Tooltip content="Close">&times;</Tooltip>}
			</span>
			<div
				className={`${styles.modal} ${
					background === "black" ? styles.blackBackground : ""
				}`}
				onClick={(e) => e.stopPropagation()}
			>
				{title && (
					<div className={styles.title}>
						<h1>{title}</h1>
					</div>
				)}
				{isDefaultClose && (
					<span
						className={`${styles.close} ${
							isDefaultClose ? styles.defaultClose : ""
						}`}
						onClick={() => setOpenModal(false)}
					>
						<Tooltip content="Close">&times;</Tooltip>
					</span>
				)}
				{children}
			</div>
		</div>,
		document.getElementById("portal") as HTMLElement
	);
};

export default Modal;
