import { FC } from "react";
import PostsList from "../../components/PostsList";
import SuggestedFollowers from "../../components/SuggestedFollowers/SuggestedFollowers";
import styles from "./Home.module.scss";

const Home: FC = () => {
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
