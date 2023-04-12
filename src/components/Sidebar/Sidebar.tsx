import { FC } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import NavigationMenu from "../NavigationMenu";
import { BsInstagram } from "react-icons/bs";
import LogoText from "../LogoText";
import { RootState } from "../../redux/store";
import styles from "./Sidebar.module.scss";

const Sidebar: FC = () => {
	const dropDownMenu = useSelector(
		(state: RootState) => state.app.dropDownMenu
	);

	return (
		<div
			className={`${styles.sidebar} ${
				dropDownMenu ? styles.sidebarSmall : ""
			}`}
		>
			{dropDownMenu ? (
				<div className={styles.logoSmall}>
					<Link to="/">
						<BsInstagram />
					</Link>
				</div>
			) : (
				<div className={styles.logoSmall}>
					<LogoText />
				</div>
			)}
			<NavigationMenu />
		</div>
	);
};

export default Sidebar;
