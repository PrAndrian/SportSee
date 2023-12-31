/* eslint-disable linebreak-style */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/404.module.css';

/**
 * Page de l'erreur 404.
 *
 * @component
 * @returns {JSX.Element} Le composant React.
 */
function Error404() {
  document.title = 'SportSee - Page non trouvée';

  return (
    <div id={styles.page404}>
      <h1 className={styles.error404}>404</h1>
      <p className={styles.sentence404}>Oups! La page que vous demandez n'existe pas.</p>
      <Link className={styles.link404} to="/">Retourner sur la page d'accueil</Link>
    </div>
  );
}

export default Error404;
