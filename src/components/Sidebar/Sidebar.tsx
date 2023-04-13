import { FC } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import NavigationMenu from "../NavigationMenu";
import { BsInstagram } from "react-icons/bs";
import LogoText from "../LogoText";
import { RootState } from "../../redux/store";
import styles from "./Sidebar.module.scss";

const Sidebar: FC = () => {
	const showDropDownMenu = useSelector(
		(state: RootState) => state.app.showDropDownMenu
	);

	return (
		<div
			className={`${styles.sidebar} ${
				showDropDownMenu ? styles.sidebarSmall : ""
			}`}
		>
			{showDropDownMenu ? (
				<div className={styles.logoIcon}>
					<Link to="/">
						<BsInstagram />
					</Link>
				</div>
			) : (
				<div className={styles.logoText}>
					<LogoText />
				</div>
			)}
			<NavigationMenu />
		</div>
	);
};

export default Sidebar;
