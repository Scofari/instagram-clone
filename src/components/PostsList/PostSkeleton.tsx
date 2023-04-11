import { FC } from "react";
import ContentLoader from "react-content-loader";
import Spinner from "../UI/Spinner";
import styles from "./PostsList.module.scss";

const PostSkeleton: FC = () => (
	<>
		<div className={styles.skeleton}>
			<Spinner />
			<ContentLoader
				speed={2}
				width={250}
				height={39}
				viewBox="0 0 250 40"
				backgroundColor="#323232"
				foregroundColor="#000"
			>
				<rect x="40" y="4" rx="3" ry="3" width="130" height="10" />
				<rect x="40" y="22" rx="3" ry="3" width="80" height="10" />
				<circle cx="16" cy="16" r="16" />
			</ContentLoader>
		</div>
		<ContentLoader
			speed={0}
			width={470}
			height={550}
			viewBox="0 0 400 460"
			backgroundColor="#8c8c8c"
			foregroundColor="#919191"
		>
			{/* <circle cx="31" cy="31" r="15" /> */}
			{/* <rect x="58" y="18" rx="2" ry="2" width="140" height="10" /> */}
			{/* <rect x="58" y="34" rx="2" ry="2" width="120" height="10" /> */}
			<rect x="0" y="60" rx="2" ry="2" width="400" height="400" />
		</ContentLoader>
	</>
);

export default PostSkeleton;
