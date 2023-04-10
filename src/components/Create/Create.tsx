import { FC, useContext } from "react";
import { RiAddBoxLine } from "react-icons/ri";
import { ModalContext } from "../../providers/ModalContext";
import SVGMedia from "../CreateModal/SVGMedia";
import NavigationItem from "../NavigationItem/index";
import Button from "../UI/Button";
import Modal from "../UI/Modal";

const Create: FC = () => {
    const { openModal, setOpenModal } = useContext(ModalContext);

    return (
        <>
            <div onClick={() => setOpenModal(true)}>
                <NavigationItem icon={RiAddBoxLine} title="Create" />
            </div>
            {openModal && (
                <Modal
                    title="Create new post"
                    style={{ width: "500px", height: "560px" }} //TODO: className add
                >
                    <div>
                        <SVGMedia />
                        <p>Drag photos and videos here</p>
                        <Button text="Select from computer" />
                    </div>
                </Modal>
            )}
        </>
    );
};

export default Create;
