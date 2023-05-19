import { FC } from "react";
import { SuggestedFollowers, PostsList } from "../../components";
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
