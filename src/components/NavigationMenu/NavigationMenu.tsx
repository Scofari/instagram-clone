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
import SuggestedFollowerSkeleton from "../SuggestedFollower/SuggestedFollowerSkeleton";
import ContentLoader from "react-content-loader";

const NavigationMenu: FC = () => {
    const currentUser = useSelector(
        (state: RootState) => state.app.currentUser
    );

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
                {currentUser ? (
                    <NavigationItem
                        src={currentUser.avatar}
                        to={`/${currentUser.username}`}
                        title="Profile"
                    />
                ) : (
                    <ContentLoader
                        speed={2}
                        width={150}
                        height={39}
                        viewBox="0 0 150 40"
                        backgroundColor="#323232"
                        foregroundColor="#000"
                    >
                        <rect
                            x="40"
                            y="8"
                            rx="3"
                            ry="3"
                            width="70"
                            height="14"
                        />

                        <circle cx="14" cy="14" r="14" />
                    </ContentLoader>
                )}
                <More />
            </nav>
        </div>
    );
};

export default NavigationMenu;
