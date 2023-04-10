import { FC } from "react";
import { useSelector } from "react-redux";
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
import { RootState } from "../../redux/store";

const NavigationMenu: FC = () => {
	const currentUser = useSelector(
		(state: RootState) => state.app.currentUser
	);

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
			{currentUser && (
				<NavigationItem
					src={currentUser.avatar}
					to={`/${currentUser.username}`}
					title="Profile"
				/>
			)}
			<More />
		</nav>
	);
};

export default NavigationMenu;
