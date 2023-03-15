import Posts from "../PostsList/PostsList";
import UserList from "../UserList/UserList";

import styles from "./Home.module.scss";

const Home = () => {
	return (
		<div className={styles.home}>
			<div className={styles.container}>
				<Posts />
				<UserList />
			</div>
		</div>
	);
};

export default Home;
