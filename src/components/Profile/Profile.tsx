import { IoIosSettings } from "react-icons/io";
import avatar from "../../assets/vova.jpg";
import Button from "../common";
import Highlight from "../Highlight";
import { IoAddSharp } from "react-icons/io5";
import styles from "./Profile.module.scss";

const Profile = () => {
    return (
        <div className={styles.profile}>
            <header className={styles.headerProfile}>
                <div className={styles.userAvatar}>
                    <img src={avatar} alt="avatar" />
                </div>

                <div className={styles.infoProfile}>
                    <div className={styles.editProfile}>
                        <h2>vovascofari</h2>
                        <Button text="Edit profile" />
                        <IoIosSettings />
                    </div>
                    <ul>
                        <li>
                            <span>4</span> posts
                        </li>
                        <li>
                            <span>45</span> followers
                        </li>
                        <li>
                            <span>8</span> following
                        </li>
                    </ul>
                    <div className={styles.description}>
                        <span>vovascofari</span>
                        <h1>
                            Music Producer | Sound Producer
                            <br />
                        </h1>
                        <a href="https://band.link/tdtin" target={"_blank"}>
                            band.link/tdtin
                        </a>
                    </div>
                </div>
            </header>

            <div className={styles.highlightList}>
                <Highlight icon={IoAddSharp} text="New" />
                <Highlight icon={IoAddSharp} text="New" />
            </div>
        </div>
    );
};

export default Profile;
