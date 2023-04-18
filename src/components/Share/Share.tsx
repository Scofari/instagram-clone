import React, { useState } from "react";
import Modal from "../UI/Modal";

import styles from "./Share.module.scss";
import Tooltip from "../UI/Tooltip";
import { FiSend } from "react-icons/fi";
import Button from "../UI/Button";

const Share = () => {
    const [openModal, setOpenModal] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    return (
        <>
            <div onClick={() => setOpenModal(true)}>
                <Tooltip content="Share Post">
                    <FiSend />
                </Tooltip>
            </div>
            {openModal && (
                <Modal title="Share" setOpenModal={setOpenModal} isDefaultClose>
                    <div className={styles.share}>
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
                            <div className={styles.suggested}>
                                <span>Suggested</span>
                                <div>user1</div>
                                <div>user2</div>
                                {/* <div className={styles.followerInfo}>
                                    <img src={avatar} alt="avatar" />
                                    <div>
                                        <p>{username}</p>
                                        <span>{description}</span>
                                    </div>
                                </div> */}
                            </div>

                            <div className={styles.shareBtn}>
                                <Button
                                    variant="primary"
                                    size="large"
                                    disabled={!searchValue && true}
                                >
                                    Send
                                </Button>
                            </div>
                        </div>
                    </div>
                </Modal>
            )}
        </>
    );
};

export default Share;
