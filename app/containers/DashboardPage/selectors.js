import { createSelector } from 'reselect';

/**
 * Direct selector to the dashboardPage state domain
 */
const selectDashboardPageDomain = () => state => state.get('dashboard');

/**
 * Other specific selectors
 */


/**
 * Default selector used by DashboardPage
 */

const selectDashboardPage = () => createSelector(
  selectDashboardPageDomain(),
  (substate) => substate.toJS()
);

export default selectDashboardPage;
export {
  selectDashboardPageDomain,
};
