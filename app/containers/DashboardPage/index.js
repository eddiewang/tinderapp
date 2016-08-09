/*
 *
 * DashboardPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import selectDashboardPage from './selectors';
import { getRecommendations } from './actions';

import ProfileBlock from 'components/ProfileBlock';
import Sidebar from 'components/Sidebar';
import DashboardHeading from 'components/DashboardHeading';
import AppWrap from 'components/AppWrap';

import styles from './styles.scss';

class DashboardPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.state = {
      profileModal: false,
    };
  }
  componentWillMount() {
    return this.props.profiles ? null : this.props.getProfiles();
  }
  toggleProfile(profile) {
    console.log(profile);
  }
  renderProfiles() {
    return this.props.profiles.map((profile) => (
      <ProfileBlock onClick={() => this.toggleProfile(profile)} key={profile._id} USER={profile} /> // eslint-disable-line no-underscore-dangle
    ));
  }
  render() {
    return (
      <div className={styles.dashboardPage}>
        <Sidebar />
        <AppWrap>
          <DashboardHeading>Dashboard</DashboardHeading>
          {this.props.profiles && this.renderProfiles()}
        </AppWrap>
      </div>
    );
  }
}

DashboardPage.propTypes = {
  getProfiles: PropTypes.func,
  profiles: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
};

const mapStateToProps = selectDashboardPage();

const mapDispatchToProps = (dispatch) => ({
  getProfiles: () => dispatch(getRecommendations()),
  dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);
