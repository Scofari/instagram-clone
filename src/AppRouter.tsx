import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import {
	Explore,
	Home,
	Layout,
	Messages,
	NotFound,
	PostModal,
	ProfilePage,
	ProtectedRoute,
	Reels,
	Register,
} from "./pages/index";

export const AppRouter: FC = () => {
	return (
		<>
			<Routes>
				<Route path="/register" element={<Register />} />
				<Route
					path="/"
					element={
						<>
							{/* <ProtectedRoute> */}
							<Layout />
							{/* </ProtectedRoute> */}
						</>
					}
				>
					<Route index element={<Home />} />
					<Route path="/direct/inbox" element={<Messages />} />
					<Route path="/explore" element={<Explore />} />
					<Route path="/reels" element={<Reels />} />
					<Route path="/:username/" element={<ProfilePage />}>
						<Route path="saved" element={<h1>Saved</h1>} />
						<Route path="tagged" element={<h1>Tagged</h1>} />
					</Route>
					<Route path="/p/:id" element={<PostModal />} />
					<Route path="*" element={<NotFound />} />
				</Route>
			</Routes>
			<ToastContainer position="top-center" theme="dark" />
		</>
	);
};

export default AppRouter;
