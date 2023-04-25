import { ReactNode, Dispatch, SetStateAction } from "react";

export interface IModalContext {
	openModal: boolean;
	setOpenModal: Dispatch<SetStateAction<boolean>>;
}

export interface Props {
	children: ReactNode;
}
