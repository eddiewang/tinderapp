/**
*
* ProfileBlock
*
*/

import React from 'react';
import { USER } from './mock';

import styles from './styles.css';

function ProfileBlock() {
  return (
    <div className={styles.profileBlock}>
      <div className={styles.content}>
        <img alt="profile-pic" src={USER.photos[0].processedFiles[1].url} />
        <div className={styles.wrapper}>
          <h1>{USER.name}</h1>
          <h2>{`${USER.teaser.string}`}</h2>
        </div>
      </div>
    </div>
  );
}

export default ProfileBlock;
