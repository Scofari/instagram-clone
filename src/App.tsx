import { FC, useEffect } from "react";
import "./App.module.scss";
import InitialLoadingPage from "./components/InitialLoadingPage";
import { useCurrentUser } from "./hooks/useCurrentUser";
import { setCurrentUser } from "./redux/appSlice";
import { useAppDispatch } from "./redux/store";
import AllRoutes from "./routes/AllRoutes";

const App: FC = () => {
    const { data: currentUser, isLoading, error } = useCurrentUser();

    const dispatch = useAppDispatch();

    useEffect(() => {
        if (currentUser) {
            dispatch(setCurrentUser(currentUser));
        }
    }, [isLoading]);

    if (isLoading || !currentUser) return <InitialLoadingPage />;

    if (error) return <p>{error.message}</p>;

    return (
        <>
            <AllRoutes />
        </>
    );
};

export default App;
