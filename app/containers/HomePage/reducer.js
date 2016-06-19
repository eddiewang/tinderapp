import {
  SUBMIT_FORM,
} from './constants';

import { fromJS } from 'immutable';

const initialState = fromJS({
  email: '',
  password: '',
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case SUBMIT_FORM:
      return state
        .set('email', action.payload.email)
        .set('password', action.payload.password);
    default:
      return state;
  }
}

export default homeReducer;
