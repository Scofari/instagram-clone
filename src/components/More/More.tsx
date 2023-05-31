import { useState, FC } from "react";
import { RiMenuLine } from "react-icons/ri";
import { MorePopup, NavigationItem } from "../../components";

import styles from "./More.module.scss";
import { useClickOutside } from "../../hooks/useClickOutside";

const More: FC = () => {
	const [showMorePopup, setShowMorePopp] = useState(false);
	const ref = useClickOutside(() => setShowMorePopp(false));

	return (
		<div
			className={styles.more}
			ref={ref}
			onClick={() => setShowMorePopp((prev) => !prev)}
		>
			<MorePopup isShown={showMorePopup} />

			<NavigationItem icon={RiMenuLine} title="More" />
		</div>
	);
};

export default More;
