/**
*
* DashboardHeading
*
*/

import React, { PropTypes } from 'react';

import styles from './styles.scss';

function DashboardHeading(props) {
  return (
    <div className={styles.dashboardHeading}>
      <h1 className={styles.heading}>{props.children}</h1>
    </div>
  );
}

DashboardHeading.propTypes = {
  children: PropTypes.string,
};

export default DashboardHeading;
