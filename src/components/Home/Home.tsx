import React, { ReactNode } from "react";
import Posts from "../PostsList/PostsList";
import UserList from "../UserList/UserList";

import styles from "./Home.module.scss";

interface HomeProps {
	children?: ReactNode;
}

const Home = ({ children }: HomeProps) => {
	return (
		<div className={styles.home}>
			<div className={styles.container}>
				<Posts />
				<UserList />

				{/* <section>{children}</section> */}
			</div>
		</div>
	);
};

export default Home;
