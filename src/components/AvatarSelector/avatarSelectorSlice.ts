import {IconNames} from "../Icon";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface AvatarState {
  selectedAvatar: IconNames,
  shouldShowList: boolean;
  userName: string;
}

const initialState: AvatarState = {
  selectedAvatar: IconNames.SPIDER_MAN,
  shouldShowList: false,
  userName: 'dandalf the dev',
};

const avatarSelectorSlice = createSlice({
  name: 'avatarSelector.activeForm',
  initialState,
  reducers: {
    transitionActiveForm(state, action: PayloadAction<AvatarState>) {
      return state = {
        ...state,
        ...action.payload,
      }
    },
    transitionUpdateForm(state, action: PayloadAction<AvatarState>) {
      return state = {
        ...state,
        ...action.payload,
      }
    },
  }
});

export const { transitionActiveForm, transitionUpdateForm } = avatarSelectorSlice.actions;

export default avatarSelectorSlice.reducer;