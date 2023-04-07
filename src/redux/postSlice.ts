import { createSlice } from "@reduxjs/toolkit";

export interface PostState {
    isLiked: boolean;
}

const initialState: PostState = {
    isLiked: false,
};

export const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {
        toggleLike(state) {
            state.isLiked = !state.isLiked;
        },
    },
});

export const { toggleLike } = postSlice.actions;
export default postSlice.reducer;
