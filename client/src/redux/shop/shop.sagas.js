import {
  takeLatest,
  put,
  all,
  call,
} from 'redux-saga/effects';
import { firestore, parseCollections } from '../../firebase/firebase.utils';
import { ShopActionTypes } from './shop.types';
import { fetchCollectionsSuccess, fetchCollectionsFailure } from './shop.actions';

const {
  FETCH_COLLECTIONS_START,
} = ShopActionTypes;

function* fetchCollections() {
  const collectionRef = yield firestore.collection('collections');

  try {
    const snapshot = yield collectionRef.get();

    const collectionMap = parseCollections(snapshot.docs);

    yield put(fetchCollectionsSuccess(collectionMap));
  } catch (e) {
    yield put(fetchCollectionsFailure(e.message));
  }
}

function* onFetchCollectionsStart() {
  yield takeLatest(
    FETCH_COLLECTIONS_START,
    fetchCollections,
  );
}

export default function* shopSagas() {
  yield all([
    call(onFetchCollectionsStart),
  ]);
}
