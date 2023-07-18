import React from 'react'
import logo from '../assets/logo.png'
import styles from '../styles/Navbar.module.css'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav id={styles.navbar} aria-labelledby="navbar">
      <Link to="/">
        <img className={styles.logo} src={logo} alt="SportSee_logo"/>
      </Link>

      <div className={styles.links}>
        <NavLink to="/">
          Accueil
        </NavLink>
        <NavLink to="/profil">
          Profil
        </NavLink>
        <NavLink to="/reglage">
          Réglage
        </NavLink>
        <NavLink to="/communaute">
          Communauté
        </NavLink>
      </div>

      
    </nav>
  )
}

export default Navbar