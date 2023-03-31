import { FC } from "react";
import {
	RiHeartLine,
	RiHomeHeartLine,
	RiCompass3Line,
	RiVideoLine,
	RiMessengerLine,
	RiSearchLine,
	RiAddBoxLine,
	RiMenuLine,
} from "react-icons/ri";
import NavigationItem from "../NavigationItem";
import More from "../More";
import Create from "../Create";
import Search from "../Search";
import styles from "./NavigationMenu.module.scss";

// const navigationMenu = [
// 	{ icon: RiHomeHeartLine, title: "Home", to: "/" },
// 	{ icon: RiSearchLine, title: "Search", to: "/search" },
// 	{ icon: RiCompass3Line, title: "Explore", to: "/explore" },
// 	{ icon: RiVideoLine, title: "Reels", to: "/reels" },
// 	{ icon: RiMessengerLine, title: "Messages", to: "/direct/inbox" },
// 	{ icon: RiHeartLine, title: "Notifications", to: "/notifications" },
// 	{ icon: RiAddBoxLine, title: "Create", to: "/create" },
// 	{
// 		src: "https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
// 		title: "Profile",
// 		to: "/leo",
// 	},
// 	{ icon: RiMenuLine, title: "More", to: "" },
// ];

const NavigationMenu: FC = () => {
	return (
		<nav>
			{/* {navigationMenu.map((item) => (
				<NavigationItem {...item} />
			))} */}
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
