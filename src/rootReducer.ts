import { combineReducers } from '@reduxjs/toolkit';
import avatarSelectorReducer from '../src/components/AvatarSelector/avatarSelectorSlice';

const rootReducer = combineReducers({
  avatarSelector: avatarSelectorReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export { rootReducer };