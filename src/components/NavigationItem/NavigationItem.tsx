import { IconType } from "react-icons/lib";
import { NavLink } from "react-router-dom";
import styles from "./NavigationItem.module.scss";

// const setActive =

interface NavigationItemProps {
	title: string;
	to?: string;
	icon?: IconType;
	src?: string;
	navProfile?: string;
}

const NavigationItem = ({
	title = "",
	to = "",
	icon,
	src = "",
	navProfile = "",
}: NavigationItemProps) => {
	const Icon = icon;

	return (
		<li className={styles.item}>
			<NavLink
				to={to}
				className={styles.link}
				style={({ isActive }) => ({
					fontWeight: isActive ? "bold" : "",
				})}
				end
			>
				{Icon && <Icon className={`${styles.navIcon} ${navProfile}`} />}
				{src && <img src={src} className={styles.navIcon} />}
				<span className={`${styles.title} ${navProfile}`}>{title}</span>
			</NavLink>
		</li>
	);
};

export default NavigationItem;
