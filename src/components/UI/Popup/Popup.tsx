import React, { FC, ReactNode, useState } from "react";
import styles from "./Popup.module.scss";

interface PopupProps {
    children: ReactNode;
    content?: string | ReactNode;
}

const Popup: FC<PopupProps> = ({ content, children }) => {
    const [showPopup, setShowPopup] = useState(false);

    return (
        <div className={styles.tooltipWrapper}>
            <div
                onMouseEnter={() => setShowPopup(true)}
                onMouseLeave={() => setShowPopup(false)}
            >
                {children}
            </div>
            {showPopup && (
                <div
                    onMouseEnter={() => setShowPopup(true)}
                    onMouseLeave={() => setShowPopup(false)}
                    className={styles.tooltip}
                >
                    <div className={styles.tooltipContent}>{content}</div>
                </div>
            )}
        </div>
    );
};

export default Popup;
