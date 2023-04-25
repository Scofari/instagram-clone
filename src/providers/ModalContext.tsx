// import { createContext, useState } from "react";
// import { IModalContext, Props } from "./ModalContextTypes";

// export const ModalContext = createContext<IModalContext>({
// 	openModal: false,
// 	setOpenModal: () => {},
// });

// const ModalProvider = ({ children }: Props) => {
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
