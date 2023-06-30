import { FC, ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";
import Tooltip from "./../Tooltip";
import styles from "./Modal.module.scss";

interface ModalProps {
	children: ReactNode;
	setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
	title?: string | ReactNode;
	background?: "gray" | "black";
	isDefaultClose?: boolean;
}

const Modal: FC<ModalProps> = ({
	children,
	title,
	setOpenModal,
	background = "gray",
	isDefaultClose,
}) => {
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

	return createPortal(
		<div className={styles.overlay} onClick={() => setOpenModal(false)}>
			{!isDefaultClose && (
				<Tooltip content="Close">
					<span
						className={styles.mainClose}
						onClick={() => setOpenModal(false)}
					>
						&times;
					</span>
				</Tooltip>
			)}
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
					<Tooltip content="Close">
						<span
							className={`${styles.close} ${
								isDefaultClose ? styles.defaultClose : ""
							}`}
							onClick={() => setOpenModal(false)}
						>
							&times;
						</span>
					</Tooltip>
				)}
				{children}
			</div>
		</div>,
		document.getElementById("modal") as HTMLElement
	);
};

export default Modal;
