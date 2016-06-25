/**
*
* Sidebar
*
*/

import React from 'react';

import styles from './styles.scss';
import avatar from 'assets/img/avatar.png';

import Avatar from 'components/Avatar';
import { Link } from 'react-router';

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.nav}>
        <Avatar
          avatar={avatar}
          className={styles.avatar}
        />
        <ul className={styles.navlist} >
          <Link to="dashboard" activeClassName={styles.active}><li className={styles.listitem}>Dashboard</li></Link>
          <Link to="analytics" activeClassName={styles.active}><li className={styles.listitem}>Analytics</li></Link>
          <Link to="dashboard" activeClassName={styles.active}><li className={styles.listitem}>Matches</li></Link>
          <Link to="dashboard" activeClassName={styles.active}><li className={styles.listitem}>Messages</li></Link>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
