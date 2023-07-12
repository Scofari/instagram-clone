import { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { Button, Modal, Tooltip } from "../UI";

import styles from "./MessageHeader.module.scss";
import { useCurrentUser } from "../../hooks/useCurrentUser";

const MessageHeader = () => {
    const [openModal, setOpenModal] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const { data: currentUser } = useCurrentUser();

    return (
        <>
            <header className={styles.header}>
                <p>
                    <span>{currentUser?.username}</span>
                    <IoIosArrowDown />
                </p>
                <Tooltip content="New message">
                    <FiEdit onClick={() => setOpenModal(!openModal)} />
                </Tooltip>
            </header>
            {openModal && (
                <Modal title="Share" setOpenModal={setOpenModal} isDefaultClose>
                    <div className={styles.container}>
                        <div className={styles.modalContent}>
                            <div className={styles.to}>
                                <span>To:</span>
                                <input
                                    value={searchValue}
                                    type="text"
                                    placeholder="Search..."
                                    onChange={(e) =>
                                        setSearchValue(e.target.value)
                                    }
                                />
                            </div>
                            <div className={styles.accounts}>
                                <p>No account found.</p>
                            </div>

                            <div className={styles.shareBtn}>
                                <Button
                                    variant="primary"
                                    size="large"
                                    disabled={!searchValue && true}
                                >
                                    Chat
                                </Button>
                            </div>
                        </div>
                    </div>
                </Modal>
            )}
        </>
    );
};

export default MessageHeader;
