/*
 *
 * MatchesPage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectMatchesPage from './selectors';
import styles from './styles.scss';

import Sidebar from 'components/Sidebar';
import AppWrap from 'components/AppWrap';
import DashboardHeading from 'components/DashboardHeading';
import MatchCard from 'components/MatchCard';

class MatchesPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.matchesPage}>
        <Sidebar />
        <AppWrap>
          <DashboardHeading>Matches</DashboardHeading>
          <MatchCard />
          <MatchCard />
          <MatchCard />
          <MatchCard />
          <MatchCard />
          <MatchCard />
          <MatchCard />
          <MatchCard />
        </AppWrap>
      </div>
    );
  }
}

const mapStateToProps = selectMatchesPage();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MatchesPage);
