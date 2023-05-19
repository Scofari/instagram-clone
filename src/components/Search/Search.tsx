import { useState, FC, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import { RiSearchLine } from "react-icons/ri";
import { useClickOutside } from "../../hooks/useClickOutside";
import { useAppDispatch } from "../../redux/store";
import { setShowDropDownMenu } from "../../redux/appSlice";
import { SearchInput, NavigationItem } from "../../components";
import styles from "./Search.module.scss";

const Search: FC = () => {
	const [toggleSearch, setToggleSearch] = useState(false);
	const ref = useClickOutside(() => setToggleSearch(false));
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(setShowDropDownMenu(toggleSearch));
		const onEscPress = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				setToggleSearch(false);
			}
		};

		document.addEventListener("keyup", onEscPress);

		return () => {
			document.removeEventListener("keyup", onEscPress);
		};
	}, [toggleSearch]);

	return (
		<div ref={ref}>
			<CSSTransition
				in={toggleSearch}
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
					<h2>Search</h2>
					<SearchInput />
					<div className={styles.searchContentBlock}>
						<div className={styles.searchContent}>
							<h4>Recent</h4>
							<span>No recent searches</span>
						</div>
					</div>
				</div>
			</CSSTransition>
			<div onClick={() => setToggleSearch((prev) => !prev)}>
				<NavigationItem icon={RiSearchLine} title="Search" />
			</div>
		</div>
	);
};

export default Search;
