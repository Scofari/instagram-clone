import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUserSummary } from "../types/user-summary.interface";
import { ISuggestedFollower } from "../types/suggested-follower.interface";

export interface AppState {
	currentUser: IUserSummary | null;
	suggestedFollowers: ISuggestedFollower[] | null;
	showDropDownMenu: boolean;
}

const initialState: AppState = {
	currentUser: null,
	suggestedFollowers: [],
	showDropDownMenu: false,
};

export const appSlice = createSlice({
	name: "app",
	initialState,
	reducers: {
		setCurrentUser(state, { payload }: PayloadAction<IUserSummary>) {
			state.currentUser = payload;
		},
		setSuggestedFollowers(
			state,
			{ payload }: PayloadAction<ISuggestedFollower[]>
		) {
			state.suggestedFollowers = payload;
		},
		setShowDropDownMenu(state, { payload }) {
			state.showDropDownMenu = payload;
		},
	},
});

export const { setCurrentUser, setSuggestedFollowers, setShowDropDownMenu } =
	appSlice.actions;
export default appSlice.reducer;
