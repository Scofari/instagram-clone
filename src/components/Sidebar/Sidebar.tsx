import NavigationMenu from "../NavigationMenu";
import Logo from "./../Logo/index";
import styles from "./Sidebar.module.scss";

const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <Logo />
            <NavigationMenu />
        </div>
    );
};

export default Sidebar;
