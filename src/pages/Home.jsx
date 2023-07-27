import React from 'react'
import styles from '../styles/Home.module.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <main className={styles.container}>
        <h1>Voir pages profils</h1>
        <Link to={`/profil/${12}`}>Karl Dovineau</Link>
    </main>
  )
}

export default Home