// import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { getUserFromLocalStorage } from "../utils/localStorage";
// import axiosInstance from "./../api/axiosInstance";
// import { toast } from "react-toastify";

// export interface UserState {
// 	user: { email: string; password: string; username?: string } | null;
// 	isLoading: boolean;
// }

// const initialState: UserState = {
// 	isLoading: false,
// 	user: getUserFromLocalStorage(),
// };

// export const registerUser = createAsyncThunk(
// 	"user/registerUser",
// 	async (user, thunkAPI) => {
// 		try {
// 			const resp = await axiosInstance.post("auth/register", user);

// 			return resp.data;
// 		} catch (error) {
// 			return thunkAPI.rejectWithValue(error);
// 		}
// 	}
// );
// export const loginUser = createAsyncThunk(
// 	"user/loginUser",
// 	async (user, thunkAPI) => {
// 		try {
// 			const resp = await axiosInstance.post("auth/login", user);
// 			console.log("isMember: ", user);

// 			return resp.data;
// 		} catch (error) {
// 			return thunkAPI.rejectWithValue(error);
// 		}
// 	}
// );

// export const userSlice = createSlice({
// 	name: "user",
// 	initialState,
// 	reducers: {
// 		setUser(state) {
// 			state.user = null;
// 		},
// 	},
// 	extraReducers: {
// 		[registerUser.pending]: (state: UserState) => {
// 			state.isLoading = true;
// 		},
// 		[registerUser.fulfilled]: (state: UserState, { payload }: any) => {
// 			const { user } = payload;
// 			state.isLoading = false;
// 			state.user = user;
// 			toast.success(`Hello There ${user.name}`);
// 		},
// 		[registerUser.rejected]: (state: UserState, { payload }: any) => {
// 			state.isLoading = false;
// 			toast.error(payload);
// 		},
// 	},
// });

// export const { setUser } = userSlice.actions;
// export default userSlice.reducer;
