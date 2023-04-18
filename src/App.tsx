import { FC, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "./api";
import { useAppDispatch } from "./redux/store";
import { setCurrentUser } from "./redux/appSlice";
import Home from "./components/Home/Home";
import Layout from "./layout";
import NotFound from "./components/NotFound";
import Messages from "./components/Messages";
import Reels from "./components/Reels";
import Explore from "./components/Explore/index";
import Profile from "./components/ProfilePage";
import PostModal from "./components/PostModal";
import InitialLoadingPage from "./components/InitialLoadingPage";
import "./App.module.scss";
import ProfilePage from "./components/ProfilePage";
import Share from "./components/Share";

const App: FC = () => {
    const dispatch = useAppDispatch();
    const { data: currentUser, isLoading: isUserLoading } = useQuery(
        ["auth"],
        getCurrentUser
    );
    console.log("🚀 ~ file: App.tsx:57 ~ currentUser:", currentUser);

    useEffect(() => {
        if (currentUser) {
            dispatch(setCurrentUser(currentUser));
        }
    }, [isUserLoading]);

    if (isUserLoading || !currentUser) return <InitialLoadingPage />;

    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/direct/inbox" element={<Messages />} />
                    <Route path="/explore" element={<Explore />} />
                    <Route path="/reels" element={<Reels />} />
                    <Route path="/:username/*" element={<Profile />}>
                        {/* <Route path="saved" element={<Share />} />
                        <Route path="tagged" element={<Profile />} /> */}
                    </Route>

                    <Route path="/p/:id" element={<PostModal />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </>
    );
};

export default App;
