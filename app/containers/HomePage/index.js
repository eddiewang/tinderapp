/*
 *
 * HomePage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import styles from './styles.scss';

import Button from 'components/Button';
import { Link } from 'react-router';

class HomePage extends React.Component {// eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.homePage}>
        <div className={styles.nav}>
          <ul>
            <li>About</li>
            <li>FAQ</li>
            <li>Github</li>
          </ul>
        </div>
        <div className={styles.hero}>
          <div className={styles.content}>
            <h1>lit</h1>
            <h3>tinder matching, messaging, and analytics at your fingertips</h3>
            <Link to="login"><Button className={styles.btn}>Start</Button></Link>
          </div>
        </div>
      </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapDispatchToProps)(HomePage);
