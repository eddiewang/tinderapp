/**
*
* FlexboxSpread
*
*/

import React from 'react';

import styles from './styles.scss';

function FlexboxSpread(props) {
  return (
    <div
      className={styles.flexboxSpread}
      style={{
        padding: props.padding,
      }}
    >
      {props.children}
    </div>
  );
}

export default FlexboxSpread;
