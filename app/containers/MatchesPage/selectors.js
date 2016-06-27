import { createSelector } from 'reselect';

/**
 * Direct selector to the matchesPage state domain
 */
const selectMatchesPageDomain = () => state => state.get('matches');

/**
 * Other specific selectors
 */


/**
 * Default selector used by MatchesPage
 */

const selectMatchesPage = () => createSelector(
  selectMatchesPageDomain(),
  (substate) => substate.toJS()
);

export default selectMatchesPage;
export {
  selectMatchesPageDomain,
};
