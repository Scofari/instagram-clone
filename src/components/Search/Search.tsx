import React from "react";
import { RiSearchLine } from "react-icons/ri";
import NavigationItem from "../NavigationItem";
import SearchInput from "../SearchInput";
import styles from "./Search.module.scss";

const Search = () => {
	const [toggleSearch, setToggleSearch] = React.useState(false);

	return (
		<div className={`${styles.search} ${styles.hide}`}>
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
				<NavigationItem
					to="/search"
					icon={RiSearchLine}
					title="Search"
				/>
			</div>
		</div>
	);
};

export default Search;
