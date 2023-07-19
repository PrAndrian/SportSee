import React from 'react'
import Sidebar from '../components/Profil/Sidebar'
import styles from '../styles/Profil.module.css'
import DailyActiveChart from '../components/DailyActiveChart';

const Profil = () => {
  return (
    <main id={styles.profil}>
        <Sidebar/>
        <section className={styles.profil_content}>
          <h1>Bonjour <span className={styles.name}>Thomas</span></h1>
          <span>Félicitation ! Vous avez explosé vos objectifs hier 👏</span>

          <div className={styles.container}>
            <div className={styles.charts}>
              <DailyActiveChart/>
            </div>

            <aside className={styles.stats}>

            </aside>
          </div>
        </section>
    </main>
  )
}

export default Profil