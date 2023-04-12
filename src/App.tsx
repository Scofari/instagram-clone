import { FC, useEffect } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import Home from "./components/Home/Home";
import Layout from "./layout";
import NotFound from "./components/NotFound";
import Messages from "./components/Messages";
import Reels from "./components/Reels";
import Explore from "./components/Explore/index";
import Profile from "./components/ProfilePage/ProfilePage";
import Search from "./components/Search";
import Notifications from "./components/Notifications";
import Create from "./components/Create";
import Comment from "./components/Comment";
import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "./api";
import { useAppDispatch } from "./redux/store";
import { setCurrentUser } from "./redux/appSlice";
import "./App.module.scss";
import LinearPreloader from "./components/UI/LinearPreloader";
import InitialLoadingPage from "./components/InitialLoadingPage/InitialLoadingPage";

const App: FC = () => {
	const { username = "" } = useParams();
	const dispatch = useAppDispatch();
	const { data: currentUser, isLoading: isUserLoading } = useQuery(
		["auth"],
		getCurrentUser
	);

	useEffect(() => {
		if (currentUser) {
			dispatch(setCurrentUser(currentUser));
		}
	}, [isUserLoading]);

	// if (isUserLoading || !currentUser || username) return <LinearPreloader />;
	if (isUserLoading || !currentUser) return <InitialLoadingPage />;

	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="/direct/inbox" element={<Messages />} />
					<Route path="/explore" element={<Explore />} />
					<Route path="/reels" element={<Reels />} />
					<Route path="/:username" element={<Profile />} />
					<Route path="/p/:id" element={<Comment />} />
					<Route path="*" element={<NotFound />} />
				</Route>
			</Routes>
		</>
	);
};

export default App;
