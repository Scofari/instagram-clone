import { FC, ReactNode } from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import styles from "./Tooltip.module.scss";

interface TooltipProps {
	children: ReactNode;
	content?: string;
}

const Tooltip: FC<TooltipProps> = ({ content, children }) => {
	return (
		<div className={styles.tooltipWrapper}>
			<div data-tooltip-id="tooltip" data-tooltip-content={content}>
				{children}
			</div>
			<ReactTooltip id="tooltip" float />
		</div>
	);
};

export default Tooltip;
