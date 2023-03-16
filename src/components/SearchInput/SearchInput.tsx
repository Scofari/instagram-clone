import { useState } from "react";
import { RiSearchLine } from "react-icons/ri";

import styles from "./SearchInput.module.scss";

interface SearchInputProps {
	placeholder: string;
	bgDark?: React.CSSProperties;
}

const SearchInput = ({ placeholder, bgDark }: SearchInputProps) => {
	const [searchValue, setSearchValue] = useState("");

	return (
		<div className={styles.searchInput}>
			<div className={styles.wrapper}>
				{placeholder === "Search" && !searchValue && <RiSearchLine />}

				<input
					type="text"
					value={searchValue}
					placeholder={placeholder}
					style={bgDark}
					onChange={(e) => setSearchValue(e.target.value)}
				/>

				{!bgDark
					? searchValue && (
							<span onClick={() => setSearchValue("")}>
								&#10006;
							</span>
					  )
					: null}
			</div>

			{!!bgDark && <button disabled={!searchValue && true}>Next</button>}
		</div>
	);
};

export default SearchInput;
