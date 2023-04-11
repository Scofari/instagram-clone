import { useState, FC } from "react";
import { RiMenuLine } from "react-icons/ri";
import NavigationItem from "./../NavigationItem";
import MorePopup from "./../MorePopup";
import styles from "./More.module.scss";

const More: FC = () => {
    const [showMorePopup, setShowMorePopp] = useState(false);

    return (
        <div
            className={styles.more}
            onClick={() => setShowMorePopp((prev) => !prev)}
        >
            {showMorePopup && <MorePopup />}

            <NavigationItem icon={RiMenuLine} title="More" />
        </div>
    );
};

export default More;
