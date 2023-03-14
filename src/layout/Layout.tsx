import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

import styles from "./Layout.module.scss";

const Layout = () => {
	return (
		<div className={styles.layout}>
			<Sidebar />
			<main className={styles.mainSection}>{<Outlet />}</main>
		</div>
	);
};

export default Layout;
