import { FC, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "./api";
import { useAppDispatch } from "./redux/store";
import { setCurrentUser } from "./redux/appSlice";
import InitialLoadingPage from "./components/InitialLoadingPage";
import AppRouter from "./AppRouter";
import "./App.module.scss";

const App: FC = () => {
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

	if (isUserLoading || !currentUser) return <InitialLoadingPage />;

	return (
		<>
			<AppRouter />
		</>
	);
};

export default App;
