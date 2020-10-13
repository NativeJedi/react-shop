import {
  takeLatest,
  all,
  call,
  put,
} from 'redux-saga/effects';
import {
  auth,
  createUserProfileDocument,
  getCurrentUser,
  googleAuthProvider,
} from '../../firebase/firebase.utils';
import {
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  signUpSuccess,
  signUpFailure,
} from './user.actions';
import { UserActionTypes } from './user.types';

const {
  GOOGLE_SIGN_IN_START,
  EMAIL_SIGN_IN_START,
  CHECK_USER_SESSION,
  SIGN_OUT_START,
  SIGN_UP_START,
  SIGN_UP_SUCCESS,
} = UserActionTypes;

function* getSnapshotFromUserAuth(user) {
  try {
    const userRef = yield call(createUserProfileDocument, user);
    const snapshot = yield userRef.get();

    yield put(signInSuccess({
      id: snapshot.id,
      ...snapshot.data(),
    }));
  } catch (e) {
    yield put(signInFailure(e.message));
  }
}

function* googleSignIn() {
  try {
    const { user } = yield auth.signInWithPopup(googleAuthProvider);
    yield getSnapshotFromUserAuth(user);
  } catch (e) {
    yield put(signInFailure(e.message));
  }
}

function* emailSignIn({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotFromUserAuth(user);
  } catch (e) {
    yield put(signInFailure(e.message));
  }
}

function* checkUser() {
  try {
    const user = yield getCurrentUser();

    if (!user) {
      return;
    }

    yield getSnapshotFromUserAuth(user);
  } catch (e) {
    yield put(signInFailure(e.message));
  }
}

function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (e) {
    yield put(signOutFailure(e.message));
  }
}

function* signUp({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);

    yield createUserProfileDocument(user, { displayName });

    yield put(signUpSuccess({ email, password }));
  } catch (e) {
    yield put(signUpFailure(e.message));
  }
}

function* onGoogleSignInStart() {
  yield takeLatest(
    GOOGLE_SIGN_IN_START,
    googleSignIn,
  );
}

function* onEmailSignInStart() {
  yield takeLatest(
    EMAIL_SIGN_IN_START,
    emailSignIn,
  );
}

function* onUserCheckSession() {
  yield takeLatest(
    CHECK_USER_SESSION,
    checkUser,
  );
}

function* onUserSignOut() {
  yield takeLatest(
    SIGN_OUT_START,
    signOut,
  );
}

function* onUserSignUpStart() {
  yield takeLatest(
    SIGN_UP_START,
    signUp,
  );
}

function* onSignUpSuccess() {
  yield takeLatest(
    SIGN_UP_SUCCESS,
    emailSignIn,
  );
}

export default function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onUserCheckSession),
    call(onUserSignOut),
    call(onUserSignUpStart),
    call(onSignUpSuccess),
  ]);
}
