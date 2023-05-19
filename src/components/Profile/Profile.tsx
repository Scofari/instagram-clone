import ContentLoader from "react-content-loader";
import { useSelector } from "react-redux";
import { NavigationItem } from "../../components";
import { RootState } from "../../redux/store";

const Profile = () => {
	const currentUser = useSelector(
		(state: RootState) => state.app.currentUser
	);

	return (
		<>
			{currentUser ? (
				<NavigationItem
					src={currentUser.avatar}
					to={`/${currentUser.username}`}
					title="Profile"
				/>
			) : (
				<ContentLoader
					speed={0}
					width={150}
					height={39}
					viewBox="0 0 150 40"
					backgroundColor="#323232"
					foregroundColor="#000"
				>
					<rect x="40" y="8" rx="3" ry="3" width="70" height="14" />

					<circle cx="14" cy="14" r="14" />
				</ContentLoader>
			)}
		</>
	);
};

export default Profile;
