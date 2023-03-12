import React from "react";
import { IconType } from "react-icons/lib";
import styles from "./Highlight.module.scss";

interface HighlightProps {
    icon: IconType;
    text: string;
    style?: React.CSSProperties;
}

const Highlight = ({ icon, style, text }: HighlightProps) => {
    const Icon = icon;
    return (
        <div className={styles.highlight}>
            <div className={styles.circle} tabIndex={1}>
                <Icon style={style} />
            </div>
            <span>{text}</span>
        </div>
    );
};

export default Highlight;
