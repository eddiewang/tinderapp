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
      {props.children}
    </div>
  );
}

AppWrap.propTypes = {
  children: PropTypes.node,
};

export default AppWrap;
