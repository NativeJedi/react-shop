import { UserActionTypes } from './user.types';

const {
  GOOGLE_SIGN_IN_START,
  EMAIL_SIGN_IN_START,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_FAILURE,
  SIGN_UP_FAILURE,
} = UserActionTypes;

const INITIAL_STATE = {
  currentUser: null,
  errorMessage: null,
  isFetching: false,
};

const onSignInStart = (state) => ({
  ...state,
  isFetching: true,
});

const handleAuthFail = (state, payload) => ({
  ...state,
  errorMessage: payload,
});

const actionTypes = {
  [SIGN_IN_SUCCESS]: (state, payload) => ({
    ...state,
    currentUser: payload,
    errorMessage: null,
  }),
  [SIGN_IN_FAILURE]: (state, payload) => ({
    ...state,
    currentUser: null,
    isFetching: false,
    errorMessage: payload,
  }),
  [SIGN_OUT_SUCCESS]: (state) => ({
    ...state,
    currentUser: null,
    errorMessage: null,
  }),
  [SIGN_OUT_FAILURE]: handleAuthFail,
  [SIGN_UP_FAILURE]: handleAuthFail,
  [GOOGLE_SIGN_IN_START]: onSignInStart,
  [EMAIL_SIGN_IN_START]: onSignInStart,
};

const userReducer = (state = INITIAL_STATE, { type, payload }) => {
  const action = actionTypes[type];

  if (!action) {
    return state;
  }

  return action(state, payload);
};

export default userReducer;
