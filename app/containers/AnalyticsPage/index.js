/*
 *
 * AnalyticsPage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectAnalyticsPage from './selectors';
import styles from './styles.scss';

import Sidebar from 'components/Sidebar';
import AppWrap from 'components/AppWrap';
import DashboardHeading from 'components/DashboardHeading';
import AnalyticsSquareChart from 'components/AnalyticsSquareChart';
import AnalyticsOverview from 'components/AnalyticsOverview';
import FlexboxSpread from 'components/FlexboxSpread';

class AnalyticsPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.dashboardPage}>
        <Sidebar />
        <AppWrap>
          <DashboardHeading>Analytics</DashboardHeading>
          <AnalyticsOverview />
          <FlexboxSpread padding={'40px 0 40px 0'}>
            <AnalyticsSquareChart />
            <AnalyticsSquareChart />
            <AnalyticsSquareChart />
          </FlexboxSpread>
        </AppWrap>
      </div>
    );
  }
}

const mapStateToProps = selectAnalyticsPage();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AnalyticsPage);
