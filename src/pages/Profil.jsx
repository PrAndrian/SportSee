import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Profil/Sidebar'
import styles from '../styles/Profil.module.css'
import DailyActiveChart from '../components/Profil/DailyActiveChart';
import AverageSessionTime from '../components/Profil/AverageSessionTime';
import PerformenceSession from '../components/Profil/PerformenceSession';
import Score from '../components/Profil/Score';
import CardKeyData from '../components/Profil/CardKeyData';
import { useParams } from 'react-router';
import fetchUserData from '../utils/fetchUserData';
import fetchUserActivity from '../utils/fetchUserActivity';
import fetchUserAvgSessions from '../utils/fetchUserAvgSessions';
import fetchUserPerformance from '../utils/fetchUserPerformance';

const Profil = () => {
  const {userId} = useParams()
  
  const [userData,getUser] = useState('')
  const [dailyActivity,getDailyActivity] = useState('')
  const [avgSessions,getAvgSessions] = useState('')
  const [performance,getPerformance] = useState('')

  useEffect(() => {
      fetchUserData(userId,getUser)
      fetchUserActivity(userId,getDailyActivity)
      fetchUserAvgSessions(userId,getAvgSessions)
      fetchUserPerformance(userId,getPerformance)
  }, [userId])
  
  if(!userData){
    return null
  }

  return (
    <main id={styles.profil}>
        <Sidebar/>
        <section className={styles.profilContent}>
          <h1>Bonjour <span className={styles.name}>{userData.userInfos.firstName}</span></h1>
          <span>Félicitation ! Vous avez explosé vos objectifs hier 👏</span>

          <div className={styles.container}>
            <div className={styles.info}>
              <div className={styles.chartsContainer}>
                <DailyActiveChart sessions={dailyActivity.sessions}/>
                <div className={styles.squareCharts}> 
                    <AverageSessionTime sessions={avgSessions.sessions}/>
                    <PerformenceSession performence={performance.data}/>
                    <Score score={userData.score? userData.score : userData.todayScore}/>
                </div>
              </div>

              <aside className={styles.stats}>
                <CardKeyData 
                  type={"Calories"} 
                  value={userData.keyData.calorieCount}
                />
                <CardKeyData 
                  type={"Proteines"} 
                  value={userData.keyData.proteinCount}
                />
                <CardKeyData 
                  type={"Glucides"} 
                  value={userData.keyData.carbohydrateCount}
                />
                <CardKeyData 
                  type={"Lipides"} 
                  value={userData.keyData.lipidCount}
                />
              </aside>
            </div>
          </div>
        </section>
    </main>
  )
}

export default Profil