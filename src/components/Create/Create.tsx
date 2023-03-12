import { useState } from "react";
import { RiAddBoxLine } from "react-icons/ri";
import NavigationItem from "../NavigationItem/index";
import CreateModal from "./../CreateModal";
import styles from "./Create.module.scss";

const Create = () => {
    const [openModal, setOpenModal] = useState(false);

    return (
        <div onClick={() => setOpenModal((prev) => !prev)}>
            {openModal && <CreateModal />}
            <NavigationItem to="/create" icon={RiAddBoxLine} title="Create" />
        </div>
    );
};

export default Create;
