import {IconNames} from "../Icon";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type StateNames = 'activeForm' | 'loading' | 'inactiveForm' | 'updateForm'

export interface AvatarState {
  selectedAvatar: IconNames,
  shouldShowList: boolean;
  userName: string;
  shouldEditUsername: boolean;
  isLoading: boolean;
  stateName: StateNames;
}

const initialState: AvatarState = {
  selectedAvatar: IconNames.SPIDER_MAN,
  shouldShowList: false,
  userName: 'dandalf the dev',
  shouldEditUsername: false,
  isLoading: true,
  stateName: 'loading',
};

interface TypedMap<T> {
  [key: string]: T
}

const stateTransitionMap: TypedMap<string[]> = {
  loading: ['activeForm', 'inactiveForm', 'updateForm'],
  activeForm: ['updateForm', 'inactiveForm'],
  inactiveForm: ['activeForm'],
  updateForm: ['inactiveForm'],
};

function isAllowedTransition(currentState: string, transitionState: string) {
  const stateMap = stateTransitionMap[currentState];
  return stateMap.includes(transitionState);
}

function determineState(currentState: AvatarState, newState: AvatarState): AvatarState {
  if(!isAllowedTransition(currentState.stateName, newState.stateName)) {
    return currentState;
  }
  return newState;
}


const avatarSelectorSlice = createSlice({
  name: 'avatarSelector',
  initialState,
  reducers: {
    transitionActiveForm(state, action: PayloadAction<AvatarState>) {
      return determineState(state, {
        ...state,
        ...action.payload,
        stateName: 'activeForm',
      });
    },
    transitionInActiveForm(state) {
      return determineState(state, {
        ...state,
        shouldEditUsername: false,
        shouldShowList: false,
        isLoading: false,
        stateName: 'inactiveForm',
      })
    },
    transitionLoading(state) {
      return determineState(state, {
        ...state,
        isLoading: true,
        stateName: 'loading',
      });
    },
    transitionUpdateForm(state, action: PayloadAction<AvatarState>) {
      return determineState(state, {
        ...state,
        ...action.payload,
        stateName: 'updateForm',
      })
    },
  }
});

export const { transitionActiveForm, transitionUpdateForm, transitionInActiveForm } = avatarSelectorSlice.actions;

export default avatarSelectorSlice.reducer;