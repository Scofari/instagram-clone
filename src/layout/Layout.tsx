import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

import styles from "./Layout.module.scss";

const Layout = () => {
	return (
		<div className={styles.layout}>
			<Sidebar />
			<section className={styles.mainSection}>{<Outlet />}</section>
		</div>
	);
};

export default Layout;
