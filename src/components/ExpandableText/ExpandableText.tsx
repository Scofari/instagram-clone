import { useState } from "react";
import styles from "./ExpandableText.module.scss";

interface Props {
	children: string;
	maxChars?: number;
}

const ExpandableText = ({ children, maxChars = 0 }: Props) => {
	const [isExpanded, setExpanded] = useState(false);

	if (maxChars === 0) return null;

	const text = isExpanded
		? children
		: children.substring(0, maxChars) + "...";

	return (
		<>
			{text}
			<button
				className={styles.button}
				onClick={() => setExpanded(!isExpanded)}
			>
				{isExpanded ? "less" : "more"}
			</button>
		</>
	);
};

export default ExpandableText;
