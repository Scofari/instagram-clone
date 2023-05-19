import { useState, FC } from "react";
import { RiMenuLine } from "react-icons/ri";
import { MorePopup, NavigationItem } from "../../components";

import styles from "./More.module.scss";

const More: FC = () => {
	const [showMorePopup, setShowMorePopp] = useState(false);

	return (
		<div
			className={styles.more}
			onClick={() => setShowMorePopp((prev) => !prev)}
		>
			<MorePopup isShown={showMorePopup} />

			<NavigationItem icon={RiMenuLine} title="More" />
		</div>
	);
};

export default More;
