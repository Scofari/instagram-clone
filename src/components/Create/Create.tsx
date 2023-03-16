import { useState } from "react";
import { RiAddBoxLine } from "react-icons/ri";
import NavigationItem from "../NavigationItem/index";
import CreateModal from "./../CreateModal";
import styles from "./Create.module.scss";

const Create = () => {
	const [openModal, setOpenModal] = useState(false);
	console.log("openModal: ", openModal);

	return (
		<>
			<div onClick={() => setOpenModal(true)}>
				<NavigationItem icon={RiAddBoxLine} title="Create" />
			</div>
			{openModal && <CreateModal setOpenModal={setOpenModal} />}
		</>
	);
};

export default Create;
