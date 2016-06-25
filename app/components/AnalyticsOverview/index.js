/**
*
* AnalyticsOverview
*
*/

import React from 'react';

import Card from 'components/Card';
import Avatar from 'components/Avatar';

import avatar from 'assets/img/avatar.png';
import styles from './styles.scss';

function AnalyticsOverview() {
  return (
    <div className={styles.analyticsOverview}>
      <Card width={'100%'} height={'100%'}>
        <div className={styles.avatarblock}>
          <Avatar className={styles.avatar} avatar={avatar} width={150} height={150} />
        </div>
        <div className={styles.selector}>
          <span>Day</span>
          <span>Week</span>
        </div>
        <div className={styles.statistics}>
          <div className={styles.statblock}>
            <h1>145</h1>
            <span className={styles.label}>Likes</span>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default AnalyticsOverview;
