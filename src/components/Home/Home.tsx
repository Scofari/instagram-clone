import { FC } from "react";
import Posts from "../PostsList/PostsList";
import SuggestedFollowers from "../SuggestedFollowers/SuggestedFollowers";
import styles from "./Home.module.scss";

const Home: FC = () => {
    return (
        <div className={styles.home}>
            <div className={styles.container}>
                <Posts />
                <SuggestedFollowers />
            </div>
        </div>
    );
};

export default Home;
