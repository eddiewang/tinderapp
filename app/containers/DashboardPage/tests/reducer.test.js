import expect from 'expect';
import dashboardPageReducer from '../reducer';
import { fromJS } from 'immutable';

describe('dashboardPageReducer', () => {
  it('returns the initial state', () => {
    expect(dashboardPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
