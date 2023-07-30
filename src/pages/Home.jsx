/* eslint-disable linebreak-style */
import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Home.module.css';

function Home() {
  document.title = 'SportSee - Accueil';
  return (
    <main className={styles.container}>
      <div className={styles.card}>
        <h1>Voir pages profils</h1>
        <Link to={`/profil/${12}`}>Karl Dovineau</Link>
        <Link to={`/profil/${18}`}>Cecilia Ratorez</Link>
      </div>
    </main>
  );
}

export default Home;
