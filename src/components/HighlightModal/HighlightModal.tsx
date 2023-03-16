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
	return (
		<Modal
			setOpenModal={setOpenModal}
			highlight
			title="New Highlight"
			style={{ width: "400px", height: "180px" }}
		>
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
