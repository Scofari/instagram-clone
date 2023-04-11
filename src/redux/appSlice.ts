import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUserSummary } from "../types/user-summary.interface";
import { ISuggestedFollower } from "../types/suggested-follower.interface";

export interface AppState {
	currentUser: IUserSummary | null;
	suggestedFollowers: ISuggestedFollower[] | null;
	dropDownMenu: boolean;
}

const initialState: AppState = {
	currentUser: null,
	suggestedFollowers: [],
	dropDownMenu: false,
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
		setDropDownMenu(state, { payload }) {
			state.dropDownMenu = payload;
		},
	},
});

export const { setCurrentUser, setSuggestedFollowers, setDropDownMenu } =
	appSlice.actions;
export default appSlice.reducer;
