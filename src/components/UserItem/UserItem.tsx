import React from "react";
import { Link } from "react-router-dom";
import styles from "./UserItem.module.scss";

interface UserItemProps {
    name: string;
    description: string;
    action: string;
    img: string;
    style?: React.CSSProperties;
}

const UserItem = ({ name, description, action, img, style }: UserItemProps) => {
    return (
        <div className={styles.user}>
            <div className={styles.userInfo}>
                <img src={img} alt="avatar" style={style} />
                <div>
                    <Link to="/">{name}</Link>
                    <span>{description}</span>
                </div>
            </div>
            <button>{action}</button>
        </div>
    );
};

export default UserItem;
