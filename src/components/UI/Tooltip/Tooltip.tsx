import React, { FC, ReactNode, useState } from "react";
import styles from "./Tooltip.module.scss";

interface TooltipProps {
	children: ReactNode;
	content?: string | ReactNode;
}

const Tooltip: FC<TooltipProps> = ({ content, children }) => {
	const [showTooltip, setShowTooltip] = useState(false);

	const toggleTooltip = () => setShowTooltip((prevState) => !prevState);

	return (
		<div className={styles.tooltipWrapper}>
			<div
			// onMouseEnter={toggleTooltip}
			// onMouseLeave={toggleTooltip}
			>
				{children}
			</div>
			{/* {showTooltip && content && ( */}
			<div className={styles.tooltip}>
				<div className={styles.tooltipContent}>{content}</div>
			</div>
			{/* )} */}
		</div>
	);
};

export default Tooltip;
