import { BsClockHistory, BsBookmark, BsMoon } from "react-icons/bs";
import { IoIosSettings } from "react-icons/io";
import { TbMessageReport } from "react-icons/tb";
import styles from "./MorePopup.module.scss";
import { IconType } from "react-icons/lib";

const MorePopup = () => {
	type PopupItems = {
		text: string;
		icon?: IconType;
	};

	const popupItems: PopupItems[] = [
		{ text: "Settings", icon: IoIosSettings },
		{ text: "Your activity", icon: BsClockHistory },
		{ text: "Saved", icon: BsBookmark },
		{ text: "Switch appearance", icon: BsMoon },
		{ text: "Report a problem", icon: TbMessageReport },
		{ text: "Switch accounts" },
		{ text: "Log out" },
	];

	return (
		<div className={styles.morePopup}>
			<div className={styles.wrapper}>
				<ul>
					{popupItems.map(({ text, icon: Icon }, i) => (
						<li key={i}>
							<span>{text}</span>
							{Icon && <Icon />}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default MorePopup;
