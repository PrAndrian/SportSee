import React from 'react'
import styles from '../../styles/Sidebar.module.css'
import IconSidebar from './IconSidebar'
import meditation from '../../assets/meditation.png'
import musculation from '../../assets/musculation.png'
import natation from '../../assets/natation.png'
import velo from '../../assets/velo.png'

const Sidebar = () => {
  return (
    <nav className={styles.sidebar} aria-labelledby="sidebar">
      <div className={styles.icons}>
        <IconSidebar image={meditation}/>
        <IconSidebar image={natation}/>
        <IconSidebar image={velo}/>
        <IconSidebar image={musculation}/>
      </div>
      <small>Copiryght, SportSee 2020</small>
    </nav>
  )
}

export default Sidebar