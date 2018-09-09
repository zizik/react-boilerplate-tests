import { takeLatest, call, put } from 'redux-saga/effects';
import { FORM_REQUEST } from './constants';
import { requestFormError, requestFormSuccess } from './actions';

const fakeError = () =>
  new Promise(r => setTimeout(r, 500, { username: 'fakeError' }));

export function* getFormData(payload) {
  try {
    yield call(fakeError);
    throw Error('not good');
  } catch (err) {
    // console.log(err.message);
    // yield put(requestFormError({ username: 'faked' }));
    yield put(requestFormSuccess({ username: 'faked' }));
  }
}

export default function* formWatcher() {
  yield takeLatest(FORM_REQUEST, getFormData);
}
