import { IconType } from "react-icons/lib";
import { NavLink } from "react-router-dom";
import styles from "./NavigationItem.module.scss";

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
					<span className={`${styles.title} ${navProfile}`}>
						{title}
					</span>
				</NavLink>
			) : (
				<div className={styles.link}>
					{Icon && (
						<Icon className={`${styles.navIcon} ${navProfile}`} />
					)}
					{src && <img src={src} className={styles.navIcon} />}
					<span className={`${styles.title} ${navProfile}`}>
						{title}
					</span>
				</div>
			)}
		</li>
	);
};

export default NavigationItem;
