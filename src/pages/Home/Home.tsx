import { FC } from "react";
import { SuggestedFollowers, PostsList } from "../../components";
import styles from "./Home.module.scss";
import { useTitle } from "../../hooks/useTitle";

const Home: FC = () => {
  useTitle("");
  return (
    <div className={styles.home}>
      <div className={styles.container}>
        <PostsList />
        <SuggestedFollowers />
      </div>
    </div>
  );
};

export default Home;
