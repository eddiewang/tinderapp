/**
*
* AnalyticsOverview
*
*/

import React from 'react';

import Card from 'components/Card';
import Avatar from 'components/Avatar';

import avatar from 'assets/img/avatar.jpg';
import styles from './styles.scss';

function AnalyticsOverview() {
  return (
    <div className={styles.analyticsOverview}>
      <Card width={'100%'} height={'100%'} margin={'10px auto'} styles={{display: 'block !important'}}>
        <div className={styles.avatarblock}>
          <Avatar className={styles.avatar} avatar={avatar} width={150} height={150} />
        </div>
        <div className={styles.selector}>
          <span>Day</span>
          <span>Week</span>
        </div>
        <div className={styles.statistics}>
          <div className={styles.statblock}>
            <h1 className={styles.statheading}>145</h1>
            <span className={styles.label}>Likes</span>
          </div>
          <div className={styles.statblock}>
            <h1 className={styles.statheading}>23</h1>
            <span className={styles.label}>Matches</span>
          </div>
          <div className={styles.statblock}>
            <h1 className={styles.statheading}>35</h1>
            <span className={styles.label}>Messages</span>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default AnalyticsOverview;
