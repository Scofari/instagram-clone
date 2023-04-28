import { IconType } from "react-icons/lib";
import { NavLink } from "react-router-dom";
import styles from "./NavigationItem.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

interface NavigationItemProps {
	title: string;
	to?: string;
	icon?: IconType;
	src?: string;
	navProfile?: string;
}

const NavigationItem = ({
	title = "",
	to,
	icon: Icon,
	src = "",
	navProfile = "",
}: NavigationItemProps) => {
	const showDropDownMenu = useSelector(
		(state: RootState) => state.app.showDropDownMenu
	);

	return (
		<li className={styles.item}>
			{to ? (
				<NavLink
					to={to}
					className={styles.link}
					style={({ isActive }) => ({
						fontWeight: isActive ? "bold" : "",
					})}
				>
					{Icon && (
						<Icon className={`${styles.navIcon} ${navProfile}`} />
					)}
					{src && <img src={src} className={styles.navIcon} />}
					{!showDropDownMenu && (
						<span className={navProfile}>{title}</span>
					)}
				</NavLink>
			) : (
				<div className={styles.link}>
					{Icon && (
						<Icon className={`${styles.navIcon} ${navProfile}`} />
					)}
					{src && <img src={src} className={styles.navIcon} />}
					{!showDropDownMenu && (
						<span className={navProfile}>{title}</span>
					)}
				</div>
			)}
		</li>
	);
};

export default NavigationItem;
