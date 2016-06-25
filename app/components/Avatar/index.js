/**
*
* Avatar
*
*/

import React, { PropTypes } from 'react';
import classNames from 'classnames';

import styles from './styles.scss';

function Avatar(props) {
  const { className, style } = props;
  return (
    <div
      className={classNames(styles.avatar, className)}
      style={{
        height: props.height || 100,
        width: props.width || 100,
        ...style,
      }}
    >
      <img src={props.avatar} alt="" className={styles.avatarimg} />
    </div>
  );
}

Avatar.propTypes = {
  avatar: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  className: PropTypes.string,
  style: PropTypes.object,
};

export default Avatar;
