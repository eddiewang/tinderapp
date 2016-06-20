import { take, call, put, fork, cancel } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { GET_RECOMMENDATIONS } from './constants';
import { getRecommendationsError, getRecommendationsSuccess } from './actions';

import request from 'utils/request';

export function* getRecommendations() {
  const requestURL = '/api/tinder/recommendations';
  const profiles = yield call(request, requestURL);

  if (!profiles.err) {
    yield put(getRecommendationsSuccess(profiles.data.results));
  } else {
    yield put(getRecommendationsError(profiles.err));
  }
}

export function* setWatcher() {
  while (yield take(GET_RECOMMENDATIONS)) {
    yield call(getRecommendations);
  }
}

export function* rootSaga() {
  const watcher = yield fork(setWatcher);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// All sagas to be loaded
export default [
  rootSaga,
];
