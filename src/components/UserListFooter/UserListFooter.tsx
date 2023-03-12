import React from "react";
import styles from "./UserListFooter.module.scss";

const UserListFooter = () => {
    const footerList = [
        "About",
        "Help",
        "Press",
        "API",
        "Jobs",
        "Privacy",
        "Terms",
        "Locations",
        "Language",
        "Meta Verified",
    ];

    return (
        <div>
            <nav>
                <ul className={styles.footerList}>
                    {footerList.map((item, i) => (
                        <li key={i}>
                            <a href="#">{item}</a>
                        </li>
                    ))}
                </ul>
            </nav>
            <span
                className={styles.copyright}
            >{`© ${new Date().getFullYear()} INSTAGRAM FROM META`}</span>
        </div>
    );
};

export default UserListFooter;
