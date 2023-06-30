import { useState } from "react";
import { RiSearchLine } from "react-icons/ri";
import styles from "./SearchInput.module.scss";

const SearchInput = () => {
  const [searchValue, setSearchValue] = useState("");
  const [focus, setFocus] = useState(false);

  return (
    <div className={styles.searchInput}>
      <div className={styles.wrapper}>
        {!focus && <RiSearchLine />}
        <input
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          type="text"
          value={searchValue}
          placeholder="Search"
          onChange={(e) => setSearchValue(e.target.value)}
        />
        {focus && <span onClick={() => setSearchValue("")}>&#10006;</span>}
      </div>
    </div>
  );
};

export default SearchInput;
