import { FC, useState } from "react";
import { RiAddBoxLine } from "react-icons/ri";
import NavigationItem from "../NavigationItem/index";
import CreateModal from "./../CreateModal";

const Create: FC = () => {
	const [openModal, setOpenModal] = useState(false);

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
