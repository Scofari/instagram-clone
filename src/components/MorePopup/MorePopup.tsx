import { FC, useEffect, useState } from "react";
import {
  BsBookmark,
  BsClockHistory,
  BsMoon,
  IoIosSettings,
  TbMessageReport,
} from "react-icons/all";
import { IconType } from "react-icons/lib";
import { useNavigate } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { logout } from "../../services";
import styles from "./MorePopup.module.scss";

type PopupItems = {
  text: string;
  icon?: IconType;
};

const enum PopupOptions {
  Settings = "Settings",
  Activity = "Your activity",
  Saved = "Saved",
  Switch_Appearance = "Switch appearance",
  Report = "Report a problem",
  Switch_Accounts = "Switch accounts",
  Logout = "Log out",
}

const popupItems: PopupItems[] = [
  { text: PopupOptions.Settings, icon: IoIosSettings },
  { text: PopupOptions.Activity, icon: BsClockHistory },
  { text: PopupOptions.Saved, icon: BsBookmark },
  { text: PopupOptions.Switch_Appearance, icon: BsMoon },
  { text: PopupOptions.Report, icon: TbMessageReport },
  { text: PopupOptions.Switch_Accounts },
  { text: PopupOptions.Logout },
];

const MorePopup: FC<{ isShown: boolean }> = ({ isShown }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/register");
  };

  const handleOptions = (text: string) => {
    switch (text) {
      case PopupOptions.Logout:
        handleLogout();
        break;

      case PopupOptions.Switch_Appearance:
        break;
      default:
        break;
    }
  };

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
      <div className={styles.morePopup}>
        <div className={styles.wrapper}>
          <ul>
            {popupItems.map(({ text, icon: Icon }, i) => (
              <li key={i} onClick={() => handleOptions(text)}>
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
