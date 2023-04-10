import { FC } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import styles from "./SwitchAccounts.module.scss";

const SwitchAccounts: FC = () => {
    const currentUser = useSelector(
        (state: RootState) => state.app.currentUser
    );

    if (!currentUser) return null;
    const { avatar, username } = currentUser;

    return (
        <div className={styles.user}>
            <Link to={`/${username}`}>
                <div className={styles.userInfo}>
                    <img src={avatar} alt="avatar" />
                    <div>
                        <p>{username}</p>
                        <span>{username}</span>
                    </div>
                </div>
            </Link>
            <button>Switch</button>
        </div>
    );
};

export default SwitchAccounts;
