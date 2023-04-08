import { FC, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Layout from "./layout";
import NotFound from "./components/NotFound";
import Messages from "./components/Messages";
import Reels from "./components/Reels";
import Explore from "./components/Explore/index";
import Profile from "./components/Profile/Profile";
import Search from "./components/Search";
import Notifications from "./components/Notifications";
import Create from "./components/Create";
import Comment from "./components/Comment";
import "./App.module.scss";
import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "./api";
import { useAppDispatch } from "./redux/store";
import { setCurrentUser } from "./redux/appSlice";

const App: FC = () => {
  const dispatch = useAppDispatch();
  const { data, isLoading } = useQuery(["auth"], getCurrentUser);

  useEffect(() => {
    if (data) {
      dispatch(setCurrentUser(data));
    }
  }, [isLoading]);

  if (isLoading) return <h1>Loading...</h1>;
  if (!data) return <h1>Failed to log in</h1>;

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/direct/inbox" element={<Messages />} />
          <Route path="/search" element={<Search />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/reels" element={<Reels />} />
          <Route path="/create" element={<Create />} />
          <Route path="/:username" element={<Profile />} />
          <Route path="/p/:id" element={<Comment />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
