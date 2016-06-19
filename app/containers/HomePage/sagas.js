import { takeEvery, call, fork, cancel } from 'redux-saga';
import { LOCATION_CHANGE } from 'react-router-redux';
import { SUBMIT_FORM } from './constants';

/*

*/

export function* loginSaga() {
  yield takeEvery(SUBMIT_FORM, () => console.log('hi'));
}

export default [
  loginSaga,
];
