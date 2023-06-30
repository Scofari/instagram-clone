import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { getTokenFromSessionStorage } from "../../utils/sessionStorage";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
	const token = getTokenFromSessionStorage();

	return token ? <>{children}</> : <Navigate to={"/register"} />;
};

export default ProtectedRoute;
