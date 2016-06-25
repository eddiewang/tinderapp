/**
*
* Button
*
*/

import React, { PropTypes } from 'react';

import styles from './styles.scss';

function Button(props) {
  return (
    <div {...props}>
      <button className={styles.button}>{props.children}</button>
    </div>
  );
}

Button.propTypes = {
  children: PropTypes.node,
};

export default Button;
