import { createSelector } from 'reselect';

/**
 * Direct selector to the analyticsPage state domain
 */
const selectAnalyticsPageDomain = () => state => state.get('analytics');

/**
 * Other specific selectors
 */


/**
 * Default selector used by AnalyticsPage
 */

const selectAnalyticsPage = () => createSelector(
  selectAnalyticsPageDomain(),
  (substate) => substate.toJS()
);

export default selectAnalyticsPage;
export {
  selectAnalyticsPageDomain,
};
