import { useState } from "react";
import styles from "./HighlightInput.module.scss";

const HighlightInput = () => {
	const [value, setValue] = useState("");

	return (
		<div className={styles.highlightInput}>
			<div className={styles.wrapper}>
				<input
					type="text"
					value={value}
					placeholder="Highlight Name"
					onChange={(e) => setValue(e.target.value)}
				/>
			</div>

			<button disabled={!value && true}>Next</button>
		</div>
	);
};

export default HighlightInput;
