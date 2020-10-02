import { UserActionTypes } from './user.types';

const { SET_CURRENT_USER } = UserActionTypes;

const INITIAL_STATE = {
  currentUser: null,
};

const actionTypes = {
  [SET_CURRENT_USER]: (state, payload) => ({
    ...state,
    currentUser: payload,
  }),
};

const userReducer = (state = INITIAL_STATE, { type, payload }) => {
  const action = actionTypes[type];

  if (!action) {
    return state;
  }

  return action(state, payload);
};

export default userReducer;
