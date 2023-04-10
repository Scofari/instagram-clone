import { FC } from "react";
import ContentLoader from "react-content-loader";

const PostSkeleton: FC = () => (
	<ContentLoader
		speed={0}
		width={470}
		height={550}
		viewBox="0 0 400 460"
		backgroundColor="#8c8c8c"
		foregroundColor="#919191"
	>
		<circle cx="31" cy="31" r="15" />
		<rect x="58" y="18" rx="2" ry="2" width="140" height="10" />
		<rect x="58" y="34" rx="2" ry="2" width="120" height="10" />
		<rect x="0" y="60" rx="2" ry="2" width="400" height="400" />
	</ContentLoader>
);

export default PostSkeleton;
