import React from "react";
import UserItem from "../UserItem";
import avatar from "../../assets/vova.jpg";
import UserListFooter from "../UserListFooter";
import styles from "./UserList.module.scss";

const UserList = () => {
	return (
		<div className={styles.userList}>
			<UserItem
				name="vova"
				description="vova"
				action="Switch"
				img={avatar}
				style={{ width: 55, height: 55 }}
			/>
			<div className={styles.suggestions}>
				<span>Suggestions for you</span>
				<a href="#">See All</a>
			</div>
			<UserItem
				name="vova"
				description="vova"
				action="Follow"
				img={avatar}
			/>
			<UserItem
				name="vova"
				description="vova"
				action="Follow"
				img={avatar}
			/>
			<UserItem
				name="vova"
				description="vova"
				action="Follow"
				img={avatar}
			/>
			<UserListFooter />
		</div>
	);
};

export default UserList;
