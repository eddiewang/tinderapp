/*
 *
 * DashboardPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import selectDashboardPage from './selectors';
import getRecommendations from './actions';
import styles from './styles.css';

export class DashboardPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {
    this.props.getProfiles();
  }

  render() {
    return (
      <div className={styles.dashboardPage}>
        <h1>logo</h1>
      </div>
    );
  }
}

DashboardPage.propTypes = {
  getProfiles: PropTypes.func,
};

const mapStateToProps = selectDashboardPage();

function mapDispatchToProps(dispatch) {
  return {
    getProfiles: dispatch(getRecommendations()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);
