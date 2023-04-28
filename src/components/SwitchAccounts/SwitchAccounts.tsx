import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { BsCheckCircleFill } from "react-icons/bs";
import { RootState } from "../../redux/store";
import Modal from "../UI/Modal";
import Tooltip from "../UI/Tooltip";
import styles from "./SwitchAccounts.module.scss";

const SwitchAccounts: FC = () => {
	const [openModal, setOpenModal] = useState(false);
	const currentUser = useSelector(
		(state: RootState) => state.app.currentUser
	);

	if (!currentUser) return null;
	const { avatar, username } = currentUser;

	return (
		<div className={styles.user}>
			<Link to={`/${username}`}>
				<header className={styles.userInfo}>
					<img src={avatar} alt="avatar" />
					<div>
						<p>{username}</p>
						<span>{username}</span>
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
							<img src={avatar} alt="avatar" />
							<p>{username}</p>
							<Tooltip
								className={styles.tooltip}
								content="Checkmark filled icon"
							>
								<BsCheckCircleFill />
							</Tooltip>
						</div>
					</div>
					<span className={styles.logInto}>
						Log into an Existing Account
					</span>
				</Modal>
			)}
		</div>
	);
};

export default SwitchAccounts;
