import { FC } from "react";
import { Link } from "react-router-dom";
import styles from "./NotFound.module.scss";

const NotFound: FC = () => {
	return (
		<div className={styles.notFound}>
			<h2>Sorry, this page isn't available.</h2>
			<p>
				The link you followed may be broken, or the page may have been
				removed.
				<Link to="/">Go back to Instagram.</Link>
			</p>
		</div>
	);
};

export default NotFound;
