import ContentLoader from "react-content-loader";
import styles from "./SuggestedFollower.module.scss";
const SuggestedFollowerSkeleton = () => (
	<div className={styles.follower}>
		<div className={styles.followerInfo}>
			<ContentLoader
				speed={2}
				width={150}
				height={39}
				viewBox="0 0 150 40"
				backgroundColor="#323232"
				foregroundColor="#000"
			>
				<rect x="47" y="4" rx="3" ry="3" width="100" height="14" />
				<rect x="48" y="22" rx="3" ry="3" width="80" height="14" />
				<circle cx="18" cy="18" r="18" />
			</ContentLoader>
		</div>
	</div>
);

export default SuggestedFollowerSkeleton;
