import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { BsCheckCircleFill } from "react-icons/bs";
import { useAuth0 } from "@auth0/auth0-react";
import { useUserContext } from "../../providers/UserContext";
import { RootState } from "../../redux/store";
import { Tooltip, Modal } from "../../components/UI";
import styles from "./SwitchAccounts.module.scss";

const SwitchAccounts: FC = () => {
	const [openModal, setOpenModal] = useState(false);
	const { loginWithRedirect, myUser } = useUserContext();
	const { user } = useAuth0();
	const currentUser = useSelector(
		(state: RootState) => state.app.currentUser
	);

	if (!currentUser) return null;
	const { avatar, username } = currentUser;

	return (
		<div className={styles.user}>
			<Link to={`/${username}`}>
				<header className={styles.userInfo}>
					<img src={user?.picture || avatar} alt="avatar" />
					<div>
						<p>{user?.nickname || username}</p>
						<span>{user?.nickname || username}</span>
					</div>
				</header>
			</Link>
			<button
				className={styles.button}
				onClick={() => setOpenModal(true)}
			>
				Switch
			</button>
			{openModal && (
				<Modal
					title="Switch accounts"
					setOpenModal={setOpenModal}
					isDefaultClose
				>
					<div className={styles.modalContent}>
						<div className={styles.userInfo}>
							<Link to={`/${username}`}>
								<img src={avatar} alt="avatar" />
							</Link>
							<p>{username}</p>
							<Tooltip
								className={styles.tooltip}
								content="Checkmark filled icon"
							>
								<BsCheckCircleFill />
							</Tooltip>
						</div>
					</div>
					<span
						className={styles.logInto}
						onClick={loginWithRedirect}
					>
						Log into an Existing Account
					</span>
				</Modal>
			)}
		</div>
	);
};

export default SwitchAccounts;
