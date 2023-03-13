import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Layout from "./layout";
import NotFound from "./components/NotFound";
import Messages from "./components/Messages";
import Reels from "./components/Reels";
import Explore from "./components/Explore/index";
import Profile from "./components/Profile/Profile";
import styles from "./App.module.scss";

function App() {
	return (
		<div className={styles.app}>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="/direct/inbox" element={<Messages />} />
					<Route path="/explore" element={<Explore />} />
					<Route path="/reels" element={<Reels />} />
					<Route path="/:username" element={<Profile />} />
					<Route path="*" element={<NotFound />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
