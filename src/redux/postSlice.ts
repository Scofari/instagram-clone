import { createSlice } from "@reduxjs/toolkit";

export interface PostState {
	like: boolean;
}

const initialState: PostState = {
	like: false,
};

const { actions, reducer: postReducer } = createSlice({
	name: "post",
	initialState,
	reducers: {
		toggleLike(state) {
			state.like = !state.like;
		},
	},
});

export const { toggleLike } = actions;
export default postReducer;
