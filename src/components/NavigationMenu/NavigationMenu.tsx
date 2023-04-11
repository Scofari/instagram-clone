import { FC } from "react";
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
import Profile from "../Profile";

const NavigationMenu: FC = () => {
	return (
		<div className="">
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
					// to="/notifications"
					title="Notifications"
				/>
				<Create />
				<Profile />
				<More />
			</nav>
		</div>
	);
};

export default NavigationMenu;
