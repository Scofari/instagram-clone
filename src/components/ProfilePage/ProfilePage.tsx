import { FC } from "react";
import {
	IoAddSharp,
	AiOutlineTable,
	BsBookmark,
	CgProfile,
} from "react-icons/all";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getUserByUsername } from "../../api";
import Highlight from "../Highlight";
import ProfileHeader from "../ProfileHeader";
import ProfileContent from "../ProfileContent/index";
import NavigationItem from "../NavigationItem";
import CircularPreloader from "../UI/CircularPreloader";
import styles from "./ProfilePage.module.scss";
import Spinner from "../UI/Spinner";

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

	if (isLoading) return <CircularPreloader />;
	if (!data) return <Spinner />;

	return (
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
