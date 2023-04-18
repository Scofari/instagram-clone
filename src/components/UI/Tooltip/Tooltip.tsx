import React, { FC, ReactNode, useState } from "react";
import styles from "./Tooltip.module.scss";

interface TooltipProps {
	children: ReactNode;
	content?: string | ReactNode;
	className?: string;
}

const Tooltip: FC<TooltipProps> = ({ content, children, className }) => {
	return (
		<div className={`${styles.tooltipWrapper} ${className}`}>
			<div>{children}</div>
			<div className={styles.tooltip}>
				<div className={styles.tooltipContent}>{content}</div>
			</div>
		</div>
	);
};

export default Tooltip;
