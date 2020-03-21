import {IconNames} from "../Icon";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface AvatarState {
  selectedAvatar: IconNames,
  shouldShowList: boolean;
  userName: string;
  shouldEditUsername: boolean;
  isLoading: boolean;
}

const initialState: AvatarState = {
  selectedAvatar: IconNames.SPIDER_MAN,
  shouldShowList: false,
  userName: 'dandalf the dev',
  shouldEditUsername: false,
  isLoading: true,
};

const avatarSelectorSlice = createSlice({
  name: 'avatarSelector',
  initialState,
  reducers: {
    transitionActiveForm(state, action: PayloadAction<AvatarState>) {
      return state = {
        ...state,
        ...action.payload,
      }
    },
    transitionInActiveForm(state) {
      return state = {
        ...state,
        shouldEditUsername: false,
        shouldShowList: false,
        isLoading: false,
      }
    },
    transitionLoading(state) {
      state.isLoading = true
    },
    transitionUpdateForm(state, action: PayloadAction<AvatarState>) {
      return state = {
        ...state,
        ...action.payload,
      }
    },
  }
});

export const { transitionActiveForm, transitionUpdateForm, transitionInActiveForm } = avatarSelectorSlice.actions;

export default avatarSelectorSlice.reducer;