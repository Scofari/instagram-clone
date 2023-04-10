import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import appReducer from "./appSlice";
import postReducer from "./postSlice";

export const store = configureStore({
	reducer: {
		app: appReducer,
		post: postReducer,
	},
	devTools: true,
});

type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch<AppDispatch>;
export type RootState = ReturnType<typeof store.getState>;
