import { FC, useState } from "react";
import { RiMessengerLine } from "react-icons/all";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { Chat, MessageHeader } from "../../components";
import { Button } from "../../components/UI";
import { useTitle } from "../../hooks/useTitle";
import { RootState } from "../../redux/store";
import styles from "./Messages.module.scss";

const navigation = ["Primary", "General", "Requests"];

const Messages: FC = () => {
	const [active, setActive] = useState(false);
	const [value, setValue] = useState(0);
	const currentUser = useSelector(
		(state: RootState) => state.app.currentUser
	);
	useTitle("Inbox • Chats |");
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
								<img
									src={currentUser?.avatar || ""}
									alt="avatar"
								/>
								<div>
									<p>{currentUser?.username || ""}</p>
									<span>{currentUser?.username || ""}</span>
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
