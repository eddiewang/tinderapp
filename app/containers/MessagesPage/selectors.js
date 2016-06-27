import { createSelector } from 'reselect';

/**
 * Direct selector to the messagesPage state domain
 */
const selectMessagesPageDomain = () => state => state.get('messages');

/**
 * Other specific selectors
 */


/**
 * Default selector used by MessagesPage
 */

const selectMessagesPage = () => createSelector(
  selectMessagesPageDomain(),
  (substate) => substate.toJS()
);

export default selectMessagesPage;
export {
  selectMessagesPageDomain,
};
