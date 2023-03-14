import {
	IoAddSharp,
	AiOutlineTable,
	BsBookmark,
	CgProfile,
} from "react-icons/all";
import Highlight from "../Highlight";

import HeaderProfile from "../HeaderProfile";
import ProfileContent from "./../ProfileContent/index";
import NavigationItem from "../NavigationItem";
import styles from "./Profile.module.scss";

const navigation = [
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
				<Highlight icon={IoAddSharp} text="New" />
			</div>
			<div className={styles.navigation}>
				{navigation.map((item) => (
					<NavigationItem navProfile={styles.navProfile} {...item} />
				))}
			</div>
			<ProfileContent />
		</div>
	);
};

export default Profile;
