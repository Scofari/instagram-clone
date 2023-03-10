import { useState } from "react";
import { RiSearchLine } from "react-icons/ri";

import styles from "./SearchInput.module.scss";

const SearchInput = () => {
	const [searchValue, setSearchValue] = useState("");

	return (
		<div className={styles.searchInput}>
			<div className={styles.wrapper}>
				{!searchValue && <RiSearchLine />}

				<input
					type="text"
					value={searchValue}
					placeholder="Search"
					onChange={(e) => setSearchValue(e.target.value)}
				/>
				{searchValue && (
					<span onClick={() => setSearchValue("")}>&#10006;</span>
				)}
			</div>
		</div>
	);
};

export default SearchInput;
