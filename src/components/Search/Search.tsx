import { useState, FC, useEffect } from "react";
import { RiSearchLine } from "react-icons/ri";
import useClickOutside from "../../hooks/useClickOutside";
import NavigationItem from "../NavigationItem";
import SearchInput from "../SearchInput";
import styles from "./Search.module.scss";
import { useAppDispatch } from "../../redux/store";
import { setDropDownMenu } from "../../redux/appSlice";

const Search: FC = () => {
	const [toggleSearch, setToggleSearch] = useState(false);
	const ref = useClickOutside(() => setToggleSearch(false));
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(setDropDownMenu(toggleSearch));
	}, [toggleSearch]);

	return (
		<div ref={ref} className={`${styles.search} ${styles.hide}`}>
			{toggleSearch && (
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
			)}

			<div onClick={() => setToggleSearch((prev) => !prev)}>
				<NavigationItem icon={RiSearchLine} title="Search" />
			</div>
		</div>
	);
};

export default Search;
