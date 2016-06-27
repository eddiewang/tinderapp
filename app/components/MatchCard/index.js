/**
*
* MatchCard
*
*/

import React from 'react';
import { connect } from 'react-redux';

import styles from './styles.scss';

import Card from 'components/Card';

import history from 'mock/history.json';

const data = history.matches[0];

function MatchCard() {
  return (
    <div className={styles.matchCard}>
      <Card height={140} width={379} style={{padding: 0}}>
        <div className={styles.imagewrap}>
          <img src={data.person.photos[0].processedFiles[2].url} alt="profile" />
        </div>
        <div className={styles.contentwrap}>
          <div className={styles.name}>{data.person.name}</div>
          <div className={styles.bio}>{data.person.bio}</div>
        </div>
      </Card>
    </div>
  );
}

export default connect()(MatchCard);
