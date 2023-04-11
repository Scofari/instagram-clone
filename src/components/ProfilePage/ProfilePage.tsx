import { FC } from "react";
import {
	IoAddSharp,
	AiOutlineTable,
	BsBookmark,
	CgProfile,
} from "react-icons/all";
import Highlight from "../Highlight";
import ProfileHeader from "../ProfileHeader";
import ProfileContent from "../ProfileContent/index";
import NavigationItem from "../NavigationItem";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getUserByUsername } from "../../api";
import styles from "./ProfilePage.module.scss";

const navigationProfile = [
	{ icon: AiOutlineTable, title: "POSTS" },
	{ icon: BsBookmark, title: "SAVED" },
	{ icon: CgProfile, title: "TAGGED" },
];

const ProfilePage: FC = () => {
	const { username = "" } = useParams();
	const { data, isLoading } = useQuery(["users", username], () =>
		getUserByUsername(username)
	);

	// if (isLoading) return ;
	if (!data) return <h1>no data</h1>;

	return isLoading ? (
		<h1>Loading...</h1>
	) : (
		<div className={styles.profile}>
			<ProfileHeader {...data} />

			<div className={styles.highlightList}>
				<Highlight icon={IoAddSharp} text="New" />
			</div>
			<div className={styles.navigation}>
				{navigationProfile.map((item, idx) => (
					<NavigationItem
						key={idx}
						navProfile={styles.navProfile}
						{...item}
					/>
				))}
			</div>
			<ProfileContent />
		</div>
	);
};

export default ProfilePage;
