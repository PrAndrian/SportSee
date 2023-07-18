import React from 'react'
import Sidebar from '../components/Profil/Sidebar'
import styles from '../styles/Profil.module.css'

const Profil = () => {
  return (
    <main id={styles.profil}>
        <Sidebar/>
        <section className={styles.profil_content}>
          <h1>Bonjour <span className={styles.name}>Thomas</span></h1>
          <span>Félicitation ! Vous avez explosé vos objectifs hier 👏</span>
          <div>
            
          </div>
        </section>
    </main>
  )
}

export default Profil