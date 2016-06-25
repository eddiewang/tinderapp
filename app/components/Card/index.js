/**
*
* Card
*
*/

import React, { PropTypes } from 'react';

import styles from './styles.scss';

function Card(props) {
  return (
    <div
      className={styles.card}
      style={{
        width: props.width,
        height: props.height,
      }}
    >
      {props.children}
    </div>
  );
}

Card.propTypes = {
  children: PropTypes.node,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default Card;
