import { useContext, FC } from "react";
import {
	IoAddSharp,
	AiOutlineTable,
	BsBookmark,
	CgProfile,
} from "react-icons/all";
import Highlight from "../Highlight";
import ProfileHeader from "../ProfileHeader";
import ProfileContent from "./../ProfileContent/index";
import NavigationItem from "../NavigationItem";
import { ModalContext } from "../../providers/ModalContext";
import styles from "./Profile.module.scss";

const navigationProfile = [
	{ icon: AiOutlineTable, title: "POSTS" },
	{ icon: BsBookmark, title: "SAVED" },
	{ icon: CgProfile, title: "TAGGED" },
];

const Profile: FC = () => {
	// const { setOpenModal } = useContext(ModalContext);

	return (
		<div className={styles.profile}>
			<ProfileHeader />

			<div
				className={styles.highlightList}
				// onClick={() => setOpenModal(true)}
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
