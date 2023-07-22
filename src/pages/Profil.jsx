import React from 'react'
import Sidebar from '../components/Profil/Sidebar'
import styles from '../styles/Profil.module.css'
import DailyActiveChart from '../components/DailyActiveChart';
import data from '../data/data'

const Profil = () => {
  console.log(data)
  return (
    <main id={styles.profil}>
        <Sidebar/>
        <section className={styles.profilContent}>
          <h1>Bonjour <span className={styles.name}>{data.USER_MAIN_DATA[1].userInfos.firstName}</span></h1>
          <span>Félicitation ! Vous avez explosé vos objectifs hier 👏</span>

          <div className={styles.container}>
            <div className={styles.info}>
              <div className={styles.chartsContainer}>
                <DailyActiveChart sessions={data.USER_ACTIVITY[1].sessions}/>
                <div className={styles.squareCharts}> 
                  <div className={styles.square}></div>
                  <div className={styles.square}></div>
                  <div className={styles.square}></div>
                </div>
              </div>

              <aside className={styles.stats}>
                <div className={styles.rectangle}></div>
                <div className={styles.rectangle}></div>
                <div className={styles.rectangle}></div>
                <div className={styles.rectangle}></div>
              </aside>
            </div>
          </div>
        </section>
    </main>
  )
}

export default Profil