import { useState } from "react";
import {
	AiOutlineHeart,
	BsCameraVideo,
	BsEmojiSmile,
	BsInfoCircle,
	TbPhoto,
	TiMicrophoneOutline,
} from "react-icons/all";
import { HiOutlinePhone } from "react-icons/hi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../redux/store";
import { Tooltip } from "../UI";
import styles from "./Chat.module.scss";

const Chat = () => {
	const [message, setMessage] = useState("");
	const currentUser = useSelector(
		(state: RootState) => state.app.currentUser
	);

	return (
		<div className={styles.chat}>
			<header>
				<div className={styles.headerChat}>
					<Link to={""}>
						<div className={styles.userInfo}>
							<img src={currentUser?.avatar} alt="avatar" />
							<div>
								<p>{currentUser?.username}</p>
								<span>{currentUser?.username}</span>
							</div>
						</div>
					</Link>
					<div className={styles.actionIcons}>
						<HiOutlinePhone />
						<BsCameraVideo />
						<BsInfoCircle />
					</div>
				</div>
			</header>
			<main className={styles.dialog}>
				si. Impedit assumenda dicta nulla ipsum architecto alias soluta
				beatae quam rerum doloribus voluptas, quas ratione libero fuga.
				Blanditiis sapiente tempore quam sequi. Eaque illum sequi soluta
				nemo vel odit at suscipit esse iste, magni eveniet tempore
				aliquam perspiciatis temporibus numquam beatae quas corporis
				laborum corrupti quae id harum! Ab soluta, accusantium, numquam
				possimus nihil atque
			</main>
			<footer className={styles.inputChat}>
				<input
					type="text"
					placeholder="Message..."
					value={message}
					onChange={(event) => setMessage(event.target.value)}
				/>
				<div className={styles.emoji}>
					<Tooltip content="Emoji">
						<BsEmojiSmile size={25} />
					</Tooltip>
				</div>
				{message ? (
					<span className={styles.button} onClick={() => null}>
						Send
					</span>
				) : (
					<div className={styles.iconsBlock}>
						<Tooltip
							content="Voice Clip"
							className={styles.position}
						>
							<TiMicrophoneOutline size={30} />
						</Tooltip>
						<Tooltip content="Add Photo or Video">
							<TbPhoto size={30} />
						</Tooltip>
						<Tooltip content="Like">
							<AiOutlineHeart size={30} />
						</Tooltip>
					</div>
				)}
			</footer>
		</div>
	);
};

export default Chat;
