import { FC, useEffect, useState } from "react";
import { RiHeartLine } from "react-icons/ri";
import { CSSTransition } from "react-transition-group";
import { useClickOutside } from "../../hooks/useClickOutside";
import { useAppDispatch } from "../../redux/store";
import { setShowDropDownMenu } from "../../redux/appSlice";
import { NavigationItem } from "../../components";
import styles from "./Notifications.module.scss";

const Notifications: FC = () => {
	const [toggleDropDown, setToggleDropDown] = useState(false);
	const ref = useClickOutside(() => setToggleDropDown(false));
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(setShowDropDownMenu(toggleDropDown));
		const onEscPress = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				setToggleDropDown(false);
			}
		};

		document.addEventListener("keyup", onEscPress);

		return () => {
			document.removeEventListener("keyup", onEscPress);
		};
	}, [toggleDropDown]);

	return (
		<div ref={ref}>
			<CSSTransition
				in={toggleDropDown}
				timeout={3000}
				classNames={{
					enter: styles.fadeEnter,
					enterActive: styles.fadeEnterActive,
					exit: styles.fadeExit,
					exitActive: styles.fadeExitActive,
				}}
				unmountOnExit
			>
				<div className={styles.wrapper}>
					<h2>Notifications</h2>
					<div>
						<h4>This Month</h4>
					</div>
					<div className={styles.notificationsContentBlock}>
						<div className={styles.notificationsContent}>
							<div>
								<h4>Earlier</h4>
							</div>
							<span>No recent notifications</span>
						</div>
					</div>
				</div>
			</CSSTransition>

			<div onClick={() => setToggleDropDown((prev) => !prev)}>
				<NavigationItem icon={RiHeartLine} title="Notifications" />
			</div>
		</div>
	);
};

export default Notifications;
