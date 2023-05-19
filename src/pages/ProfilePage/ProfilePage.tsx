import { FC, useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import {
	IoAddSharp,
	AiOutlineTable,
	BsBookmark,
	CgProfile,
} from "react-icons/all";
import { useQuery } from "@tanstack/react-query";
import { IconType } from "react-icons/lib";
import { getUserByUsername } from "../../api";
import { useAppDispatch } from "../../redux/store";
import { NotFound } from "../../pages";
import { setPosts } from "../../redux/postSlice";
import { Highlight, ProfileHeader, ProfilePosts } from "../../components";
import { CircularPreloader } from "../../components/UI";
import styles from "./ProfilePage.module.scss";

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
	const { username = "" } = useParams();
	const { data: user, isLoading } = useQuery(["users", username], () =>
		getUserByUsername(username)
	);
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (user) {
			dispatch(setPosts(user.posts));
		}
	}, [user]);

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
						>
							<Icon />
							<li className={styles.navProfile}>{title}</li>
						</NavLink>
					);
				})}
			</div>
			<ProfilePosts userId={user.id} />
		</div>
	);
};

export default ProfilePage;
