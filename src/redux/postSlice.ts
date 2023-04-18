import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../types/user.interface";
import { IPost } from "../types/post.interface";

export interface PostState {}

const initialState: PostState = {};

export const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {},
});

export const {} = postSlice.actions;
export default postSlice.reducer;
