import { UserActionTypes } from './user.types';

const {
  SET_CURRENT_USER,
  EMAIL_SIGN_IN_START,
  GOOGLE_SIGN_IN_START,
  SIGN_IN_FAILURE,
  SIGN_IN_SUCCESS,
  CHECK_USER_SESSION,
  SIGN_OUT_START,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_FAILURE,
  SIGN_UP_START,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
} = UserActionTypes;

export const setCurrentUser = (user) => ({
  type: SET_CURRENT_USER,
  payload: user,
});

export const emailSignInStart = ({ email, password }) => ({
  type: EMAIL_SIGN_IN_START,
  payload: { email, password },
});

export const googleSignInStart = () => ({
  type: GOOGLE_SIGN_IN_START,
});

export const signInSuccess = (user) => ({
  type: SIGN_IN_SUCCESS,
  payload: user,
});

export const signInFailure = (errorMessage) => ({
  type: SIGN_IN_FAILURE,
  payload: errorMessage,
});

export const checkUserSession = () => ({
  type: CHECK_USER_SESSION,
});

export const signOutStart = () => ({
  type: SIGN_OUT_START,
});

export const signOutSuccess = () => ({
  type: SIGN_OUT_SUCCESS,
});

export const signOutFailure = (errorMessage) => ({
  type: SIGN_OUT_FAILURE,
  payload: errorMessage,
});

export const signUpStart = ({
  email,
  displayName,
  password,
}) => ({
  type: SIGN_UP_START,
  payload: {
    email,
    displayName,
    password,
  },
});

export const signUpSuccess = ({ email, password }) => ({
  type: SIGN_UP_SUCCESS,
  payload: { email, password },
});

export const signUpFailure = (errorMessage) => ({
  type: SIGN_UP_FAILURE,
  payload: errorMessage,
});
