import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IProfilePost } from "./../types/profile-post.interface";

export interface PostState {
	posts: IProfilePost[] | null;
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
		},
		deletePost(state, action) {
			if (state.posts)
				state.posts = state.posts.filter((post) => {
					return post.id !== action.payload;
				});
		},
		deleteAllPosts(state) {
			state.posts = [];
		},
	},
});

export const { setPosts, deletePost, deleteAllPosts } = postSlice.actions;
export default postSlice.reducer;
