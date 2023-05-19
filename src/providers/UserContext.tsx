import {
	ReactNode,
	createContext,
	useContext,
	useEffect,
	useState,
} from "react";
import { useAuth0 } from "@auth0/auth0-react";
// import { IUserContext, Props } from "./UserContextTypes";

// const UserContext = createContext<IUserContext>({
// 	myUser: null,
// 	logout: () => {},
// 	loginWithRedirect: () => {},
// });
const UserContext = createContext<any>({});
export const UserProvider = ({ children }: { children: ReactNode }) => {
	const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();
	const [myUser, setMyUser] = useState<any>(null);

	useEffect(() => {
		if (user) {
			if (isAuthenticated) {
				setMyUser(user);
			} else {
				setMyUser(false);
			}
		}
	}, [isAuthenticated]);

	return (
		<UserContext.Provider
			value={{
				myUser,
				logout,
				loginWithRedirect,
			}}
		>
			{children}
		</UserContext.Provider>
	);
};

export const useUserContext = () => {
	return useContext(UserContext);
};
