import { FC } from "react";
import { BsInstagram } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { LogoText, NavigationMenu } from "../../components";
import { RootState } from "../../redux/store";
import styles from "./Sidebar.module.scss";

const Sidebar: FC = () => {
  const showDropDownMenu = useSelector(
    (state: RootState) => state.app.showDropDownMenu
  );
  const { pathname } = useLocation();

  const messagesPage = pathname === "/direct/inbox";

  return (
    <div
      className={`${styles.sidebar} ${
        showDropDownMenu ? styles.sidebarSmall : ""
      }`}
    >
      {showDropDownMenu || messagesPage ? (
        <div className={styles.logoIcon}>
          <Link to="/">
            <BsInstagram />
          </Link>
        </div>
      ) : (
        <div className={styles.logoText}>
          <LogoText />
        </div>
      )}
      <NavigationMenu />
    </div>
  );
};

export default Sidebar;
