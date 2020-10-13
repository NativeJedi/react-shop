import {
  all,
  takeLatest,
  call,
  put,
} from 'redux-saga/effects';
import { UserActionTypes } from '../user/user.types';
import { clearCart } from './cart.actions';

function* clearCartWithSuccess() {
  yield put(clearCart());
}

function* onSignOutSuccess() {
  yield takeLatest(
    UserActionTypes.SIGN_OUT_SUCCESS,
    clearCartWithSuccess,
  );
}

export default function* cartSagas() {
  yield all([
    call(onSignOutSuccess),
  ]);
}
