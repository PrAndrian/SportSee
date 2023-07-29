/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../styles/IconSidebar.module.css';

function IconSidebar({ image }) {
  return (
    <div className={styles.icon}>
      <img src={image} alt="icon" />
    </div>
  );
}
IconSidebar.propTypes = {
  image: PropTypes.string.isRequired,
};
export default IconSidebar;
