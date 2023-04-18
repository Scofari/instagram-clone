import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import styles from "./SwitchAccounts.module.scss";
import Popup from "../UI/Popup";
import ProfilePopup from "../ProfilePopup";
import Modal from "../UI/Modal";
import { BsCheckCircleFill } from "react-icons/bs";

const SwitchAccounts: FC = () => {
    const [openModal, setOpenModal] = useState(false);
    const currentUser = useSelector(
        (state: RootState) => state.app.currentUser
    );

    if (!currentUser) return null;
    const { avatar, username } = currentUser;

    return (
        <div className={styles.user}>
            <Link to={`/${username}`}>
                <div className={styles.userInfo}>
                    <img src={avatar} alt="avatar" />
                    <div>
                        <p>{username}</p>
                        <span>{username}</span>
                    </div>
                </div>
            </Link>
            <button
                className={styles.button}
                onClick={() => setOpenModal(true)}
            >
                Switch
            </button>
            {openModal && (
                <Modal
                    title="Switch accounts"
                    setOpenModal={setOpenModal}
                    isDefaultClose
                >
                    <div className={styles.modalContent}>
                        <div className={styles.userInfo}>
                            <img src={avatar} alt="avatar" />
                            <div>
                                <p>{username}</p>
                            </div>
                            <BsCheckCircleFill />
                        </div>
                    </div>
                    <span className={styles.logInto}>
                        Log into an Existing Account
                    </span>
                </Modal>
            )}
        </div>
    );
};

export default SwitchAccounts;
