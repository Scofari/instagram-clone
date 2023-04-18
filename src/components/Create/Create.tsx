import { FC, useState } from "react";
import { RiAddBoxLine } from "react-icons/ri";
import SVGMedia from "./SVGMedia";
import NavigationItem from "../NavigationItem/index";
import Modal from "../UI/Modal";
import InputFile from "../UI/InputFile";
import styles from "./Create.module.scss";

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
