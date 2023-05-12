import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useUserContext } from "../../providers/UserContext";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
	const { myUser } = useUserContext();

	if (!myUser) return <Navigate to="/register" />;

	return <>{children}</>;
};

export default ProtectedRoute;
