import React from 'react'
import styles from '../../styles/IconSidebar.module.css' 

const IconSidebar = ({image}) => {
  return (
    <div className={styles.icon}>
       <img src={image} alt="icon" /> 
    </div>
  )
}

export default IconSidebar