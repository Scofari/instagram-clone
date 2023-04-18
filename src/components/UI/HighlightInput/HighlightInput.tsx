import { useState } from "react";
import styles from "./HighlightInput.module.scss";

const HighlightInput = () => {
    const [searchValue, setSearchValue] = useState("");

    return (
        <div className={styles.highlightInput}>
            <div className={styles.wrapper}>
                <input
                    type="text"
                    value={searchValue}
                    placeholder="Highlight Name"
                    onChange={(e) => setSearchValue(e.target.value)}
                />
            </div>

            <button disabled={!searchValue && true}>Next</button>
        </div>
    );
};

export default HighlightInput;
