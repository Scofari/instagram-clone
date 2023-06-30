import { FC } from "react";
import styles from "./SuggestedFollowersFooter.module.scss";
import data from "./data";

const SuggestedFollowersFooter: FC = () => {
	return (
		<div>
			<nav>
				<ul className={styles.suggestedFollowersFooter}>
					{data.map((item, i) => (
						<li key={i}>
							<a href="#">{item}</a>
						</li>
					))}
				</ul>
			</nav>
			<span
				className={styles.copyright}
			>{`© ${new Date().getFullYear()} INSTAGRAM FROM META`}</span>
		</div>
	);
};

export default SuggestedFollowersFooter;
