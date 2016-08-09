/**
*
* AppWrap
*
*/

import React, { PropTypes } from 'react';

import styles from './styles.scss';

function AppWrap(props) {
  return (
    <div className={styles.appWrap}>
      <div className={styles.appContainer}>
        {props.children}
      </div>
    </div>
  );
}

AppWrap.propTypes = {
  children: PropTypes.node,
};

export default AppWrap;
