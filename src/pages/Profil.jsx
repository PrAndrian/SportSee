import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Profil/Sidebar'
import styles from '../styles/Profil.module.css'
import DailyActiveChart from '../components/Profil/DailyActiveChart';
import data from '../data/data'
import AverageSessionTime from '../components/Profil/AverageSessionTime';
import PerformenceSession from '../components/Profil/PerformenceSession';
import Score from '../components/Profil/Score';
import CardKeyData from '../components/Profil/CardKeyData';
import { useParams } from 'react-router';
import axios from 'axios';

const Profil = () => {
  const {userId} = useParams()
  const [userData,getUser] = useState('')
  
  const getUserData = (userId) =>{
    axios.get(`http://localhost:3000/user/${userId}`)
    .then(response => {
      const data = response.data.data;
      getUser(data)
    })
    .catch(error => console.log(error.message));
  }
  

  useEffect(() => {
      getUserData(userId)
  }, [userId])
  
  console.log(userData)

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
                <DailyActiveChart sessions={data.USER_ACTIVITY[0].sessions}/>
                <div className={styles.squareCharts}> 
                    <AverageSessionTime sessions={data.USER_AVERAGE_SESSIONS[0].sessions}/>
                    <PerformenceSession performence={data.USER_PERFORMANCE[0].data}/>
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