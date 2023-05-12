import { FC } from "react";
import { RiMessengerLine } from "react-icons/ri";
import NavigationItem from "../NavigationItem/NavigationItem";
import styles from "./Messages.module.scss";

const Messages: FC = () => {
	return (
		<div className={styles.messages}>
			<h2>Messages</h2>
		</div>
	);
};

export default Messages;
