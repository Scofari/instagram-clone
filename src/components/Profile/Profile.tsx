import {
	IoAddSharp,
	AiOutlineTable,
	BsBookmark,
	CgProfile,
} from "react-icons/all";
import Highlight from "../Highlight";

import HeaderProfile from "../ProfileHeader";
import ProfileContent from "./../ProfileContent/index";
import NavigationItem from "../NavigationItem";
import styles from "./Profile.module.scss";

const navigationProfile = [
	{ icon: AiOutlineTable, title: "POSTS" },
	{ icon: BsBookmark, title: "SAVED" },
	{ icon: CgProfile, title: "TAGGED" },
];

const Profile = () => {
	return (
		<div className={styles.profile}>
			<HeaderProfile />

			<div className={styles.highlightList}>
				<Highlight icon={IoAddSharp} text="New" />
			</div>
			<div className={styles.navigation}>
				{navigationProfile.map((item) => (
					<NavigationItem navProfile={styles.navProfile} {...item} />
				))}
			</div>
			<ProfileContent />
		</div>
	);
};

export default Profile;
