/* eslint-disable linebreak-style */
import React from 'react';
import styles from '../../styles/Sidebar.module.css';
import IconSidebar from './IconSidebar';
import meditation from '../../assets/meditation.png';
import musculation from '../../assets/musculation.png';
import natation from '../../assets/natation.png';
import velo from '../../assets/velo.png';

/**
 * Composant de la sidebar vertical.
 *
 * @component
 * @returns {JSX.Element} Le composant React.
 */
function Sidebar() {
  return (
    <nav className={styles.sidebar} aria-labelledby="sidebar">
      <div className={styles.icons}>
        <IconSidebar image={meditation} />
        <IconSidebar image={natation} />
        <IconSidebar image={velo} />
        <IconSidebar image={musculation} />
      </div>
      <small>Copiryght, SportSee 2020</small>
    </nav>
  );
}

export default Sidebar;
