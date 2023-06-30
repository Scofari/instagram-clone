import { FC } from "react";
import {
  RiCompass3Line,
  RiHomeHeartLine,
  RiMessengerLine,
  RiVideoLine,
} from "react-icons/all";
import {
  Create,
  More,
  NavigationItem,
  Notifications,
  Profile,
  Search,
} from "../../components";
import styles from "./NavigationMenu.module.scss";

const NavigationMenu: FC = () => {
  return (
    <nav className={styles.menu}>
      <NavigationItem icon={RiHomeHeartLine} to="/" title="Home" />
      <div className={styles.hideOnTablet}>
        <Search />
      </div>
      <NavigationItem icon={RiCompass3Line} to="/explore" title="Explore" />
      <NavigationItem icon={RiVideoLine} to="/reels" title="Reels" />

      <NavigationItem
        icon={RiMessengerLine}
        to="/direct/inbox"
        title="Messages"
      />
      <Notifications />

      <Create />
      <Profile />
      <div className={styles.hideOnTablet}>
        <More />
      </div>
    </nav>
  );
};

export default NavigationMenu;
