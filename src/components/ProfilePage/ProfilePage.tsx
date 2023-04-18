import { FC } from "react";
import {
    IoAddSharp,
    AiOutlineTable,
    BsBookmark,
    CgProfile,
} from "react-icons/all";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getUserByUsername } from "../../api";
import Highlight from "../Highlight";
import ProfileHeader from "../ProfileHeader";
import ProfilePosts from "../ProfilePosts/index";
import CircularPreloader from "../UI/CircularPreloader";
import NotFound from "../NotFound";
import styles from "./ProfilePage.module.scss";

const navigationProfile = [
    { icon: <AiOutlineTable />, title: "POSTS" },
    { icon: <BsBookmark />, title: "SAVED" },
    { icon: <CgProfile />, title: "TAGGED" },
];

const ProfilePage: FC = () => {
    const { username = "" } = useParams();
    console.log("🚀 ~ file: ProfilePage.tsx:26 ~ username:", username);
    const { data, isLoading } = useQuery(["users", username], () =>
        getUserByUsername(username)
    );

    if (isLoading) return <CircularPreloader />;
    if (!data) return <NotFound />;

    return (
        <div className={styles.profile}>
            <ProfileHeader {...data} />

            <div className={styles.highlightList}>
                <Highlight icon={IoAddSharp} text="New" />
            </div>
            <div className={styles.navigation}>
                {navigationProfile.map((item, idx) => (
                    <NavLink
                        to={""}
                        key={idx}
                        className={styles.navItem}
                        style={({ isActive }) => ({
                            fontWeight: isActive ? "bold" : "",
                        })}
                    >
                        {item.icon}
                        <li className={styles.navProfile}>{item.title}</li>
                    </NavLink>
                ))}
            </div>
            <ProfilePosts posts={data.posts} />
            <Outlet />
        </div>
    );
};

export default ProfilePage;
