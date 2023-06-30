import { useAuth0 } from "@auth0/auth0-react";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { IUserContext } from "./UserContextTypes";

const UserContext = createContext({} as IUserContext);
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
