import { FC, useEffect, useState } from "react";
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
import { useAppDispatch } from "../../redux/store";
import { setPosts } from "../../redux/postSlice";
import styles from "./ProfilePage.module.scss";
import { IconType } from "react-icons/lib";

interface NavigationProfile {
	icon: IconType;
	title: string;
}

const navigationProfile: NavigationProfile[] = [
	{ icon: AiOutlineTable, title: "POSTS" },
	{ icon: BsBookmark, title: "SAVED" },
	{ icon: CgProfile, title: "TAGGED" },
];

const ProfilePage: FC = () => {
	const [value, setValue] = useState(0);
	const dispatch = useAppDispatch();
	const { username = "" } = useParams();
	console.log("username: ", username);
	const { data: user, isLoading } = useQuery(["users", username], () =>
		getUserByUsername(username)
	);

	useEffect(() => {
		if (user) {
			dispatch(setPosts(user));
		}
	}, []);

	if (isLoading) return <CircularPreloader />;
	if (!user) return <NotFound />;

	const getNavLinkPath = (title: string) => {
		return `/${username}/${
			title.toLocaleLowerCase() !== "posts" ? title.toLowerCase() : ""
		}`;
	};

	return (
		<div className={styles.profile}>
			<ProfileHeader {...user} />

			<div className={styles.highlightList}>
				{/* <Highlight icon={IoAddSharp} text="Songs" /> */}
				<Highlight icon={IoAddSharp} text="New" />
			</div>
			<div className={styles.navigation}>
				{navigationProfile.map((item: NavigationProfile, idx) => {
					const { icon: Icon, title } = item;
					return (
						<NavLink
							to={getNavLinkPath(title)}
							key={idx}
							onClick={() => setValue(idx)}
							className={`${styles.navItem} ${
								idx === value && styles.active
							}`}
							// className={({ isActive }: any) =>
							// 	isActive
							// 		? `${styles.navItem} ${styles.active}`
							// 		: styles.navItem
							// }
						>
							<Icon />
							<li className={styles.navProfile}>{title}</li>
						</NavLink>
					);
				})}
			</div>
			<ProfilePosts posts={user.posts} userId={user.id} />
			<Outlet />
		</div>
	);
};

export default ProfilePage;
