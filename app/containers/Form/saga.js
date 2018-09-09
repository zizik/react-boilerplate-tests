import { takeLatest, call, put } from 'redux-saga/effects';
import { FORM_REQUEST } from './constants';
import { requestFormError, requestFormSuccess } from './actions';

const fakeError = () =>
  new Promise(r => setTimeout(r, 500, { username: 'fakeError' }));

export function* getFormData({ payload }) {
  try {
    yield call(fakeError);
    if (payload.username === '111') {
      throw Error('not good');
    } else if (payload.username === '222') {
      yield put(requestFormSuccess({ username: 'bad1' }));
    } else {
      yield put(requestFormSuccess());
    }
  } catch (err) {
    // console.log(err.message);
    yield put(requestFormError({ username: 'bad2' }));
    // yield put(requestFormSuccess({ username: 'faked' }));
  }
}

export default function* formWatcher() {
  yield takeLatest(FORM_REQUEST, getFormData);
}
