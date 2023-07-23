import React from 'react'
import Sidebar from '../components/Profil/Sidebar'
import styles from '../styles/Profil.module.css'
import DailyActiveChart from '../components/Profil/DailyActiveChart';
import data from '../data/data'
import AverageSessionTime from '../components/Profil/AverageSessionTime';
import PerformenceSession from '../components/Profil/PerformenceSession';
import Score from '../components/Profil/Score';
import CardKeyData from '../components/Profil/CardKeyData';

const Profil = () => {
  console.log(data.USER_MAIN_DATA[0].todayScore)
  return (
    <main id={styles.profil}>
        <Sidebar/>
        <section className={styles.profilContent}>
          <h1>Bonjour <span className={styles.name}>{data.USER_MAIN_DATA[0].userInfos.firstName}</span></h1>
          <span>Félicitation ! Vous avez explosé vos objectifs hier 👏</span>

          <div className={styles.container}>
            <div className={styles.info}>
              <div className={styles.chartsContainer}>
                <DailyActiveChart sessions={data.USER_ACTIVITY[0].sessions}/>
                <div className={styles.squareCharts}> 
                    <AverageSessionTime sessions={data.USER_AVERAGE_SESSIONS[0].sessions}/>
                    <PerformenceSession performence={data.USER_PERFORMANCE[0].data}/>
                    <Score score={data.USER_MAIN_DATA[0]}/>
                </div>
              </div>

              <aside className={styles.stats}>
                <CardKeyData 
                  type={"Calories"} 
                  value={data.USER_MAIN_DATA[0].keyData.calorieCount}
                />
                <CardKeyData 
                  type={"Proteines"} 
                  value={data.USER_MAIN_DATA[0].keyData.proteinCount}
                />
                <CardKeyData 
                  type={"Glucides"} 
                  value={data.USER_MAIN_DATA[0].keyData.carbohydrateCount}
                />
                <CardKeyData 
                  type={"Lipides"} 
                  value={data.USER_MAIN_DATA[0].keyData.lipidCount}
                />
              </aside>
            </div>
          </div>
        </section>
    </main>
  )
}

export default Profil