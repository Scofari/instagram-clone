import { FC, useEffect, useState } from "react";
import { RiHeartLine } from "react-icons/ri";
import { useClickOutside } from "../../hooks/useClickOutside";
import { useAppDispatch } from "../../redux/store";
import { setDropDownMenu } from "../../redux/appSlice";
import NavigationItem from "../NavigationItem";
import styles from "./Notifications.module.scss";

const Notifications: FC = () => {
	const [toggleDropDown, setToggleDropDown] = useState(false);
	const ref = useClickOutside(() => setToggleDropDown(false));
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(setDropDownMenu(toggleDropDown));
	}, [toggleDropDown]);

	return (
		<div ref={ref}>
			{toggleDropDown && (
				<div className={styles.wrapper}>
					<h2>Notifications</h2>
					<div>
						<h4>This Month</h4>
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing
							elit. Vitae sit minus ducimus qui illum repudiandae
							fugit earum impedit commodi alias quidem, nulla vel
							reiciendis nostrum animi. Repellendus, dolore.
							Suscipit, soluta.
						</p>
					</div>
					<div className={styles.notificationsContentBlock}>
						<div className={styles.notificationsContent}>
							<div>
								<h4>Earlier</h4>
								<p>
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Necessitatibus
									exercitationem possimus, autem pariatur ea
									eligendi perspiciatis excepturi eos error
									impedit ducimus animi nihil perferendis,
									incidunt provident ipsum itaque architecto
									beatae?
								</p>
							</div>
							<span>No recent notifications</span>
						</div>
					</div>
				</div>
			)}

			<div onClick={() => setToggleDropDown((prev) => !prev)}>
				<NavigationItem icon={RiHeartLine} title="Notifications" />
			</div>
		</div>
	);
};

export default Notifications;
