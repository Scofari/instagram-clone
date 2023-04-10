import { useContext, FC } from "react";
import {
	IoAddSharp,
	AiOutlineTable,
	BsBookmark,
	CgProfile,
} from "react-icons/all";
import { LinearProgress } from "@mui/material";
import Highlight from "../Highlight";
import ProfileHeader from "../ProfileHeader";
import ProfileContent from "./../ProfileContent/index";
import NavigationItem from "../NavigationItem";
import { ModalContext } from "../../providers/ModalContext";
import styles from "./Profile.module.scss";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getUserByUsername } from "../../api";
import NotFound from "../NotFound";

const navigationProfile = [
	{ icon: AiOutlineTable, title: "POSTS" },
	{ icon: BsBookmark, title: "SAVED" },
	{ icon: CgProfile, title: "TAGGED" },
];

const Profile: FC = () => {
	// const { setOpenModal } = useContext(ModalContext);
	const { username = "" } = useParams();
	const { data, isLoading } = useQuery(["users", username], () =>
		getUserByUsername(username)
	);

	// if (isLoading) return ;
	if (!data) return <LinearProgress color="inherit" />;

	return isLoading ? (
		<LinearProgress color="inherit" />
	) : (
		<div className={styles.profile}>
			<ProfileHeader {...data} />

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
