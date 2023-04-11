// import {
// 	createContext,
// 	ReactNode,
// 	useState,
// 	Dispatch,
// 	SetStateAction,
// } from "react";

// export interface IContext {
// 	openModal: boolean;
// 	setOpenModal: Dispatch<SetStateAction<boolean>>;
// }

// type ModalContextProps = {
// 	children: ReactNode;
// };

// export const ModalContext = createContext<IContext>({
// 	openModal: false,
// 	setOpenModal: () => {},
// });

// const ModalProvider = ({ children }: ModalContextProps) => {
// 	const [openModal, setOpenModal] = useState(false);

// 	return (
// 		<ModalContext.Provider
// 			value={{
// 				openModal,
// 				setOpenModal,
// 			}}
// 		>
// 			{children}
// 		</ModalContext.Provider>
// 	);
// };

// export default ModalProvider;
