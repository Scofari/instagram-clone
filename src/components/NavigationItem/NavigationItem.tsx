import { IconType } from "react-icons/lib";
import { NavLink } from "react-router-dom";
import styles from "./NavigationItem.module.scss";

const setActive = ({ isActive }: any) => ({
	color: isActive ? "red" : "",
});

interface NavigationItemProps {
	title: string;
	to?: string;
	icon?: IconType;
	src?: string;
}

const NavigationItem = ({
	title = "",
	to = "",
	icon,
	src = "",
}: NavigationItemProps) => {
	const Icon = icon;

	return (
		<li className={styles.navigationItem}>
			{/* <NavLink
				to={to}
				className={`${styles.link} ${className} `}
				style={setActive}
				end
			>
				{Icon && <Icon className={styles.navIcon} />}
				<span className={styles.title}>{title}</span>
			</NavLink> */}
			<NavLink to={to} className={styles.link} style={setActive} end>
				{Icon && <Icon className={styles.navIcon} />}
				{src && <img src={src} className={styles.navIcon} />}
				<span className={styles.title}>{title}</span>
			</NavLink>
		</li>
	);
};

export default NavigationItem;
