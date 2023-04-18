import React, { FC, ReactNode, useState } from "react";
import styles from "./Tooltip.module.scss";

interface TooltipProps {
    children: ReactNode;
    content?: string | ReactNode;
}

const Tooltip: FC<TooltipProps> = ({ content, children }) => {
    return (
        <div className={styles.tooltipWrapper}>
            <div>{children}</div>
            <div className={styles.tooltip}>
                <div className={styles.tooltipContent}>{content}</div>
            </div>
        </div>
    );
};

export default Tooltip;
