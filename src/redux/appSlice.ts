import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUserSummary } from "../types/user-summary.interface";
import { ISuggestedFollower } from "../types/suggested-follower.interface";
import { IAuthenticate } from "../types/authenticate.interface";

export interface AppState {
    currentUser: IAuthenticate | null;
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
        setCurrentUser(state, { payload }: PayloadAction<IAuthenticate>) {
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
