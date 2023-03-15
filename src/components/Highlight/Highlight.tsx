import React, { useState, useEffect } from "react";
import { IconType } from "react-icons/lib";
import HighlightModal from "../HighlightModal";
import styles from "./Highlight.module.scss";

interface HighlightProps {
	icon: IconType;
	text: string;
	style?: React.CSSProperties;
}

const Highlight = ({ icon: Icon, style, text }: HighlightProps) => {
	const [openModal, setOpenModal] = useState(false);

	return (
		<>
			<div
				className={styles.highlight}
				onClick={() => setOpenModal(true)}
			>
				<div className={styles.circle}>
					<Icon style={style} />
				</div>
				<span>{text}</span>
			</div>
			{openModal && <HighlightModal setOpenModal={setOpenModal} />}
		</>
	);
};

export default Highlight;
