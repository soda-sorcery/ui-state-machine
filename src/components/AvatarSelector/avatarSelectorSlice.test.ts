import {AvatarState, guardTransition, isTransitionAllowed, StateNames} from "./avatarSelectorSlice";

describe('avatar selector slice', () => {
  describe('isAllowedTransition', () => {
      it('returns true if current state can transition to desired state', () => {
          const canTransition = isTransitionAllowed(StateNames.ActiveForm, StateNames.UpdateForm);
          expect(canTransition).toBeTruthy();
      });

      it('returns false if current state cannot transition to desired state', () => {
        const canTransition = isTransitionAllowed(StateNames.UpdateForm, StateNames.Loading);
        expect(canTransition).toBeFalsy();
      });
  });

  describe('determineState', () => {
    it('returns the new state when a transition is possible', () => {
      const state = {
        stateName: StateNames.Loading,
      } as AvatarState;
      const transitionState = {
        stateName: StateNames.InactiveForm,
      } as AvatarState;

      const newState = guardTransition(state, transitionState);
      expect(newState.stateName).toBe(StateNames.InactiveForm);
    });

    it('returns the current state when a transition is not possible', () => {
      const state = {
        stateName: StateNames.InactiveForm,
      } as AvatarState;
      const transitionState = {
        stateName: StateNames.UpdateForm,
      } as AvatarState;

      const newState = guardTransition(state, transitionState);
      expect(newState.stateName).toBe(StateNames.InactiveForm);
    });
  });

});
