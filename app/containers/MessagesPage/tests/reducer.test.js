import expect from 'expect';
import messagesPageReducer from '../reducer';
import { fromJS } from 'immutable';

describe('messagesPageReducer', () => {
  it('returns the initial state', () => {
    expect(messagesPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
