/*
 *
 * DashboardPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  GET_RECOMMENDATIONS,
  GET_RECOMMENDATIONS_SUCCESS,
  GET_RECOMMENDATIONS_ERROR,
} from './constants';

const initialState = fromJS({
  user: false,
  profiles: false,
  loading: false,
  error: false,
});

function dashboardPageReducer(state = initialState, action) {
  switch (action.type) {
    case GET_RECOMMENDATIONS:
      return state
        .set('loading', true);
    case GET_RECOMMENDATIONS_SUCCESS:
      return state
        .set('profiles', action.payload);
    case GET_RECOMMENDATIONS_ERROR:
      return state
        .set('error', action.payload);
    default:
      return state;
  }
}

export default dashboardPageReducer;
