import expect from 'expect';
import analyticsPageReducer from '../reducer';
import { fromJS } from 'immutable';

describe('analyticsPageReducer', () => {
  it('returns the initial state', () => {
    expect(analyticsPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
