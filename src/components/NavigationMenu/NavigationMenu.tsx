import {
    RiHeartLine,
    RiHomeHeartLine,
    RiCompass3Line,
    RiVideoLine,
    RiMessengerLine,
} from "react-icons/ri";
import NavigationItem from "../NavigationItem";
import avatar from "../../assets/vova.jpg";
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
            <NavigationItem src={avatar} to="/username" title="Profile" />
            <More />
        </nav>
    );
};

export default NavigationMenu;
