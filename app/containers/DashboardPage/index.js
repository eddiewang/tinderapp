/*
 *
 * DashboardPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import selectDashboardPage from './selectors';
import { getRecommendations } from './actions';
import styles from './styles.css';

export class DashboardPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {
    this.props.getProfiles();
  }
  renderProfiles() {
    return this.props.profiles.map((profile) => (
      <div>
        <img alt="profile-pic" src={profile.photos[0].processedFiles[2].url} />
        <h1>{profile.name}</h1>
        <h2>{`${profile.teaser.string} | ${profile.birth_date}`}</h2>
        <p>{profile.bio}</p>
      </div>
    ));
  }
  render() {
    return (
      <div className={styles.dashboardPage}>
        <h1>logo</h1>
        {this.props.profiles && this.renderProfiles()}
      </div>
    );
  }
}

DashboardPage.propTypes = {
  getProfiles: PropTypes.func,
  profiles: PropTypes.array,
};

const mapStateToProps = selectDashboardPage();

const mapDispatchToProps = (dispatch) => ({
  getProfiles: () => dispatch(getRecommendations()),
  dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);
