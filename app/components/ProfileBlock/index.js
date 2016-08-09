/**
*
* ProfileBlock
*
*/

import React from 'react';
import moment from 'moment';
import styles from './styles.scss';

function ProfileBlock({ USER, onClick }) {
  const age = moment().diff(USER.birth_date, 'Y');
  return (
    <div onClick={onClick} className={styles.profileBlock}>
      <div className={styles.content}>
        <img className={styles.img} alt="profile-pic" src={USER.photos[0].processedFiles[1].url} />
        <div className={styles.wrapper}>
          <div className={styles.first}>
            <span className={styles.name}>{USER.name}</span>
            <span className={styles.age}>{age}</span>
          </div>
          <span className={styles.teaser}>{`${USER.teaser.string}`}</span>
        </div>
      </div>
    </div>
  );
}

export default ProfileBlock;
