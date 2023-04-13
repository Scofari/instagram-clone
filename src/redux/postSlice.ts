import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../types/user.interface";
import { IPost } from "../types/post.interface";

export interface PostState {
	isLiked: boolean;
	// post: IPost | null;
}

const initialState: PostState = {
	isLiked: false,
	// post: null,
};

export const postSlice = createSlice({
	name: "post",
	initialState,
	reducers: {
		setIsLiked(state) {
			state.isLiked = !state.isLiked;
		},
		// setPost(state, { payload }: PayloadAction<IPost>) {
		// 	state.post = payload;
		// },
	},
});

export const { setIsLiked } = postSlice.actions;
export default postSlice.reducer;
