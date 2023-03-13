import {
	RiHeartLine,
	RiHomeHeartLine,
	RiCompass3Line,
	RiVideoLine,
	RiMessengerLine,
} from "react-icons/ri";
import NavigationItem from "../NavigationItem";
import More from "../More";
import Create from "../Create";
import Search from "../Search";
import styles from "./NavigationMenu.module.scss";

const NavigationMenu = () => {
	return (
		<nav>
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

			<NavigationItem
				icon={RiHeartLine}
				to="/notifications"
				title="Notifications"
			/>
			<Create />
			<NavigationItem
				src={
					"https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"
				}
				to="/leo"
				title="Profile"
			/>
			<More />
		</nav>
	);
};

export default NavigationMenu;
