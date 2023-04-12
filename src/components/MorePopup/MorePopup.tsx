import { FC } from "react";
import { CSSTransition } from "react-transition-group";
import { BsClockHistory, BsBookmark, BsMoon } from "react-icons/bs";
import { IoIosSettings } from "react-icons/io";
import { TbMessageReport } from "react-icons/tb";
import { IconType } from "react-icons/lib";
import styles from "./MorePopup.module.scss";

type PopupItems = {
    text: string;
    icon?: IconType;
};

const popupItems: PopupItems[] = [
    { text: "Settings", icon: IoIosSettings },
    { text: "Your activity", icon: BsClockHistory },
    { text: "Saved", icon: BsBookmark },
    { text: "Switch appearance", icon: BsMoon },
    { text: "Report a problem", icon: TbMessageReport },
    { text: "Switch accounts" },
    { text: "Log out" },
];

const MorePopup: FC<{ isShown: boolean }> = ({ isShown }) => {
    return (
        <CSSTransition
            in={isShown}
            timeout={300}
            classNames={{
                enter: styles.fadeEnter,
                enterActive: styles.fadeEnterActive,
                exit: styles.fadeExit,
                exitActive: styles.fadeExitActive,
            }}
            unmountOnExit
        >
            <div className={`${styles.morePopup} `}>
                <div className={styles.wrapper}>
                    <ul>
                        {popupItems.map(({ text, icon: Icon }, i) => (
                            <li key={i}>
                                <span>{text}</span>
                                {Icon && <Icon />}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </CSSTransition>
    );
};

export default MorePopup;
