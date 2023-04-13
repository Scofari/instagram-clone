import { FC } from "react";
import {
	RiHomeHeartLine,
	RiCompass3Line,
	RiVideoLine,
	RiMessengerLine,
} from "react-icons/all";
import NavigationItem from "../NavigationItem";
import More from "../More";
import Create from "../Create";
import Search from "../Search";
import Profile from "../Profile";
import Notifications from "../Notifications";
import styles from "./NavigationMenu.module.scss";

const NavigationMenu: FC = () => {
	return (
		<nav className={styles.menu}>
			<NavigationItem icon={RiHomeHeartLine} to="/" title="Home" />
			<Search />
			<NavigationItem
				icon={RiCompass3Line}
				to="/explore"
				title="Explore"
			/>
			<NavigationItem icon={RiVideoLine} to="/reels" title="Reels" />

			<NavigationItem
				icon={RiMessengerLine}
				to="/direct/inbox"
				title="Messages"
			/>
			<Notifications />

			<Create />
			<Profile />
			<More />
		</nav>
	);
};

export default NavigationMenu;
