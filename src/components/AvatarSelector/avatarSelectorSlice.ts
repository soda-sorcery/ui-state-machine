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
  stateName: StateNames.Loading,
};

interface TypedMap<T> {
  [key: string]: T
}

const stateTransitionMap: TypedMap<string[]> = {
  loading: [StateNames.ActiveForm, StateNames.InactiveForm, StateNames.UpdateForm],
  activeForm: [StateNames.InactiveForm, StateNames.UpdateForm, StateNames.ActiveForm],
  inactiveForm: [StateNames.ActiveForm],
  updateForm: [StateNames.InactiveForm, StateNames.ActiveForm, StateNames.UpdateForm],
};

export function isAllowedTransition(currentState: string, transitionState: string) {
  const stateMap = stateTransitionMap[currentState];
  return stateMap.includes(transitionState);
}

export function determineState(currentState: AvatarState, newState: AvatarState): AvatarState {
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
        stateName: StateNames.ActiveForm,
      });
    },
    transitionInActiveForm(state) {
      return determineState(state, {
        ...state,
        shouldEditUsername: false,
        shouldShowList: false,
        isLoading: false,
        stateName: StateNames.InactiveForm,
      })
    },
    transitionLoading(state) {
      return determineState(state, {
        ...state,
        isLoading: true,
        stateName: StateNames.Loading,
      });
    },
    transitionUpdateForm(state, action: PayloadAction<AvatarState>) {
      return determineState(state, {
        ...state,
        ...action.payload,
        stateName: StateNames.UpdateForm,
      })
    },
  }
});

export const { transitionActiveForm, transitionUpdateForm, transitionInActiveForm } = avatarSelectorSlice.actions;

export default avatarSelectorSlice.reducer;