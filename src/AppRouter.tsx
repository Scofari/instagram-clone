import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Layout from "./layout";
import NotFound from "./components/NotFound";
import Messages from "./components/Messages";
import Reels from "./components/Reels";
import Explore from "./components/Explore/index";
import ProfilePage from "./components/ProfilePage";
import PostModal from "./components/PostModal";

export const AppRouter: FC = () => {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Home />} />
				<Route path="/direct/inbox" element={<Messages />} />
				<Route path="/explore" element={<Explore />} />
				<Route path="/reels" element={<Reels />} />
				<Route path="/:username/*" element={<ProfilePage />}>
					<Route index element={<h1>Posts</h1>} />
					<Route path="saved" element={<h1>Saved</h1>} />
					<Route path="tagged" element={<h1>Tagged</h1>} />
				</Route>
				<Route path="/p/:id" element={<PostModal />} />
				<Route path="*" element={<NotFound />} />
			</Route>
		</Routes>
	);
};

export default AppRouter;
