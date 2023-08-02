/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../styles/IconSidebar.module.css';

/**
 * Composant représantant l'info-bulle du Composant "DailyActiveChart"
 *
 * @component
 * @param {string} image - un prop représentant l'image de la card key data
 * @returns {JSX.Element} Le composant React.
 */
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
