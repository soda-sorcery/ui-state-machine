import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface NameState {
  name: string;
}

const initialState = {
  name: 'dandalf the dev'
};

const userNameSlice = createSlice({
  name: 'userName',
  initialState,
  reducers: {
    setUserName(state, action: PayloadAction<NameState>) {
      const {name} = action.payload;
      state.name = name;
    }
  }
});


export const {setUserName} = userNameSlice.actions;

export default userNameSlice.reducer;