import { takeLatest, call } from 'redux-saga/effects';
import { FORM_REQUEST } from './constants';

const fakeError = () =>
  new Promise(r => setTimeout(r, 500, { username: 'fakeError' }));

export function* getFormData(payload) {
  const error = yield call(fakeError);
  console.log({ error });
}

export default function* formWatcher() {
  yield takeLatest(FORM_REQUEST, getFormData);
}
