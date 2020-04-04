import {IconNames} from "../Icon";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export enum StateNames {
  ActiveForm = 'activeForm',
  Loading = 'loading',
  InactiveForm = 'inactiveForm',
  UpdateForm = 'updateForm',
}

export interface AvatarState {
  selectedAvatar: IconNames,
  shouldShowList: boolean;
  username: string;
  shouldEditUsername: boolean;
  isLoading: boolean;
  stateName: StateNames;
}

const initialState: AvatarState = {
  selectedAvatar: IconNames.SPIDER_MAN,
  shouldShowList: false,
  username: 'dandalf the dev',
  shouldEditUsername: false,
  isLoading: true,
  stateName: StateNames.Loading,
};

interface TransitionMap {
  transitionState: string[];
}
interface StateMap {
  [key: string]: TransitionMap;
}

const stateTransitionMap: StateMap = {
  loading: {
    transitionState: [StateNames.InactiveForm],
  },
  activeForm: {
    transitionState: [StateNames.InactiveForm, StateNames.UpdateForm, StateNames.ActiveForm],
  },
  inactiveForm: {
    transitionState: [StateNames.ActiveForm],
  },
  updateForm: {
    transitionState: [StateNames.InactiveForm, StateNames.ActiveForm, StateNames.UpdateForm],
  }
};

export function isTransitionAllowed(currentState: string, transitionState: string) {
  const stateMap = stateTransitionMap[currentState];
  return stateMap.transitionState.includes(transitionState);
}

export function guardTransition(currentState: AvatarState, newState: AvatarState): AvatarState {
  if(!isTransitionAllowed(currentState.stateName, newState.stateName)) {
    return currentState;
  }
  return newState;
}


const avatarSelectorSlice = createSlice({
  name: 'avatarSelectorg',
  initialState,
  reducers: {
    transitionActiveForm(state, action: PayloadAction<AvatarState>) {
      return guardTransition(state, {
        ...state,
        ...action.payload,
        stateName: StateNames.ActiveForm,
      });
    },
    transitionInActiveForm(state) {
      return guardTransition(state, {
        ...state,
        shouldEditUsername: false,
        shouldShowList: false,
        isLoading: false,
        stateName: StateNames.InactiveForm,
      })
    },
    transitionLoading(state) {
      return guardTransition(state, {
        ...state,
        isLoading: true,
        stateName: StateNames.Loading,
      });
    },
    transitionUpdateForm(state, action: PayloadAction<AvatarState>) {
      return guardTransition(state, {
        ...state,
        ...action.payload,
        stateName: StateNames.UpdateForm,
      })
    },
  }
});

export const { transitionActiveForm, transitionUpdateForm, transitionInActiveForm } = avatarSelectorSlice.actions;

export default avatarSelectorSlice.reducer;