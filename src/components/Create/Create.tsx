import { FC, useState } from "react";
import { RiAddBoxLine } from "react-icons/ri";
import { InputFile, Modal } from "../../components/UI";
import { NavigationItem } from "../../components";
import SVGMedia from "./SVGMedia";
import styles from "./Create.module.scss";
import { useTitle } from "../../hooks/useTitle";

const Create: FC = () => {
	const [openModal, setOpenModal] = useState(false);

	return (
		<>
			<div onClick={() => setOpenModal(true)}>
				<NavigationItem icon={RiAddBoxLine} title="Create" />
			</div>
			{openModal && (
				<Modal title="Create new post" setOpenModal={setOpenModal}>
					<div className={styles.create}>
						<div className={styles.modalContent}>
							<SVGMedia />
							<p>Drag photos and videos here</p>
							<InputFile />
						</div>
					</div>
				</Modal>
			)}
		</>
	);
};

export default Create;
