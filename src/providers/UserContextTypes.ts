import { ReactNode } from "react";

export interface IUserContext {
	myUser: string | null;
	logout: () => void;
	loginWithRedirect: () => void;
}

export interface Props {
	children: ReactNode;
}
