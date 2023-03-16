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
import { useContext } from "react";
import { ModalContext } from "../../providers/ModalContext";

const navigationProfile = [
	{ icon: AiOutlineTable, title: "POSTS" },
	{ icon: BsBookmark, title: "SAVED" },
	{ icon: CgProfile, title: "TAGGED" },
];

const Profile = () => {
	const { setOpenModal } = useContext(ModalContext);

	return (
		<div className={styles.profile}>
			<HeaderProfile />

			<div
				className={styles.highlightList}
				onClick={() => setOpenModal(true)}
			>
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

export default Profile;
