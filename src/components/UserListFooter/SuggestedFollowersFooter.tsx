import { FC } from "react";
import styles from "./SuggestedFollowersFooter.module.scss";

const SuggestedFollowersFooter: FC = () => {
	const suggestedFollowersFooter = [
		"About",
		"Help",
		"Press",
		"API",
		"Jobs",
		"Privacy",
		"Terms",
		"Locations",
		"Language",
		"Meta Verified",
	];

	return (
		<div>
			<nav>
				<ul className={styles.suggestedFollowersFooter}>
					{suggestedFollowersFooter.map((item, i) => (
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
