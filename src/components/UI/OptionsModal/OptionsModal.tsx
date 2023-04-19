import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../Modal";
import styles from "./OptionModal.module.scss";

const myProfileOptions = [
	"Delete",
	"Edit",
	"Hide like count",
	"Turn off commenting",
	"Go to post",
	"Share to...",
	"Copy link",
	"Embed",
	"Cancel",
];

const postOptions = [
	"Report",
	"Unfollow",
	"Add to favorites",
	"Go to post",
	"Share to...",
	"Copy link",
	"Embed",
	"Cancel",
];

const data2 = ["Delete", "Cancel"];

interface OptionsModalProps {
	setOpenModal?: (x: boolean) => void;
	isPostOptions?: boolean;
}

const OptionsModal = ({ setOpenModal, isPostOptions }: OptionsModalProps) => {
	const defaultOptions = isPostOptions ? postOptions : myProfileOptions;
	const [initialData, setInitialData] = useState(defaultOptions);
	const [openCloseModal, setOpenCloseModal] = useState(false);

	const onClickHandlerOptions = (item: string) => {
		switch (item) {
			case "Delete":
				setInitialData([]);
				setOpenCloseModal(true);
				break;

			case "Cancel":
				setOpenModal?.(false);

			default:
				break;
		}
	};

	return (
		<Modal setOpenModal={() => setOpenModal?.(false)}>
			<div className={styles.modalContent}>
				<ul>
					{initialData.map((item, idx) => (
						<li
							onClick={() => onClickHandlerOptions(item)}
							key={idx}
						>
							{item}
						</li>
					))}

					{openCloseModal && (
						<Modal setOpenModal={() => setOpenCloseModal(true)}>
							<div className={styles.modalContent}>
								<div className={styles.modalText}>
									<p>Delete post?</p>
									<span>
										Are you sure you want to delete this
										post?
									</span>
								</div>
								<ul>
									{data2.map((item, idx) => (
										<li
											onClick={() =>
												onClickHandlerOptions(item)
											}
											key={idx}
										>
											{item}
										</li>
									))}
								</ul>
							</div>
						</Modal>
					)}
				</ul>
			</div>
		</Modal>
	);
};

export default OptionsModal;
