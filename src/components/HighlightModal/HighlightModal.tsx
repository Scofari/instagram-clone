import React, { useState, useEffect } from "react";
import Modal from "../Modal";
import SearchInput from "../SearchInput";
import styles from "./HighlightModal.module.scss";

type HighlightModalProps = {
	setOpenModal: (x: boolean) => void;
};

const bgDarkStyles = {
	background: "#1A1A1A",
	width: "90%",
	margin: "20px auto -25px",
};

const HighlightModal = ({ setOpenModal }: HighlightModalProps) => {
	const onClose = () => {};

	return (
		<Modal
			highlight
			open
			title="New Highlight"
			onClose={onClose}
			style={{ width: "400px", height: "180px" }}
		>
			<div className={styles.title}>
				<h1>New Highlight</h1>
				<span
					className={styles.close}
					onClick={() => setOpenModal(false)}
				>
					&times;
				</span>
			</div>
			<div className={styles.modalContent}>
				<SearchInput
					placeholder="Highlight name"
					bgDark={bgDarkStyles}
				/>
			</div>
		</Modal>
	);
};

export default HighlightModal;
