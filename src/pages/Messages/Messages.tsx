import { FC, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoIosArrowDown, RiMessengerLine, FiEdit } from "react-icons/all";
import { useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { useUserContext } from "../../providers/UserContext";
import { Button, Modal, Tooltip } from "../../components/UI";
import { Chat, MessageHeader } from "../../components";
import { RootState } from "../../redux/store";
import styles from "./Messages.module.scss";

const navigation = ["Primary", "General", "Requests"];

const Messages: FC = () => {
	const [active, setActive] = useState(false);
	const [openModal, setOpenModal] = useState(false);
	const [searchValue, setSearchValue] = useState("");
	const [value, setValue] = useState(0);
	const { myUser, loginWithRedirect } = useUserContext();
	const { user } = useAuth0();
	const currentUser = useSelector(
		(state: RootState) => state.app.currentUser
	);

	if (!currentUser) return null;
	const { avatar, username } = currentUser;

	return (
		<main>
			<div className={styles.messages}>
				<aside className={styles.users}>
					<MessageHeader />
					<ul>
						{navigation.map((text: string, idx: number) => {
							return (
								<NavLink
									to={""}
									key={idx}
									onClick={() => setValue(idx)}
									className={`${
										idx === value && styles.active
									}`}
								>
									<li>{text}</li>
								</NavLink>
							);
						})}
					</ul>
					<div className={styles.divider} />

					<div className={styles.interlocutorsList}>
						<Link to={""}>
							<div
								className={`${styles.userInfo} ${
									active && styles.activeUser
								}`}
								onClick={() => setActive(!active)}
							>
								<img src={myUser.picture} alt="avatar" />
								<div>
									<p>{myUser.name}</p>
									<span>{myUser.nickname}</span>
								</div>
							</div>
						</Link>
					</div>
				</aside>
				<div className={styles.chat}>
					{active ? (
						<Chat />
					) : (
						<div className={styles.defaultInfo}>
							<div className={styles.circle}>
								<RiMessengerLine />
							</div>
							<span>Your messages</span>
							<p>
								Send private photos and messages to a friend or
								group
							</p>
							<Button variant="primary">Send message</Button>
						</div>
					)}
				</div>
			</div>
		</main>
	);
};

export default Messages;
