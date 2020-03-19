import {IconNames} from "../Icon";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface AvatarState {
  selectedAvatar: IconNames,
}

const initialState: AvatarState = {
  selectedAvatar: IconNames.THE_THING
};

const avatarSelectorSlice = createSlice({
  name: 'avatarSelector',
  initialState,
  reducers: {
    setAvatar(state, action: PayloadAction<AvatarState>) {
      const {selectedAvatar} = action.payload;
      console.log('reducer', selectedAvatar);
      state.selectedAvatar = selectedAvatar;
    },
  }
});

export const { setAvatar } = avatarSelectorSlice.actions;

export default avatarSelectorSlice.reducer;