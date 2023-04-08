import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../types/user.interface";
import { IUserSummary } from "../types/user-summary.interface";

export interface AppState {
  currentUser: IUserSummary | null;
}

const initialState: AppState = {
  currentUser: null,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setCurrentUser(state, { payload }: PayloadAction<IUserSummary>) {
      state.currentUser = payload;
    },
  },
});

export const { setCurrentUser } = appSlice.actions;
export default appSlice.reducer;
