import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IPost } from "../types/post.interface";

export interface PostState {
	posts: IPost[] | null;
}

const initialState: PostState = {
	posts: null,
};

export const postSlice = createSlice({
	name: "post",
	initialState,
	reducers: {
		setPosts(state, action) {
			state.posts = action.payload;
			console.log("action.payload: ", action.payload);
		},
	},
});

export const { setPosts } = postSlice.actions;
export default postSlice.reducer;
