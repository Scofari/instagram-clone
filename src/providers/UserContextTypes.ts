import { ReactNode, Dispatch, SetStateAction } from "react";

export interface IUserContext {
	myUser: string | null;
	logout: ({ returnTo }: { returnTo: string }) => void;
	loginWithRedirect: () => void;
}

export interface Props {
	children: ReactNode;
}
