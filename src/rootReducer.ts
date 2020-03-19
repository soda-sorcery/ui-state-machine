import { combineReducers } from '@reduxjs/toolkit';
import avatarSelectorReducer from '../src/components/AvatarSelector/avatarSelectorSlice';
import userNameReducer from './components/UserName/userNameSlice';

const rootReducer = combineReducers({
  avatarSelector: avatarSelectorReducer,
  userName: userNameReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export { rootReducer };