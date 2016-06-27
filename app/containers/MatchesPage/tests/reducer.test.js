import expect from 'expect';
import matchesPageReducer from '../reducer';
import { fromJS } from 'immutable';

describe('matchesPageReducer', () => {
  it('returns the initial state', () => {
    expect(matchesPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
