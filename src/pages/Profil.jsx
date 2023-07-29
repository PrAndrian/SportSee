import { Navigate, useLoaderData } from 'react-router';
import styles from '../styles/Profil.module.css'
import Sidebar from '../components/Profil/Sidebar'
import DailyActiveChart from '../components/Profil/DailyActiveChart';
import AverageSessionTime from '../components/Profil/AverageSessionTime';
import PerformenceSession from '../components/Profil/PerformenceSession';
import Score from '../components/Profil/Score';
import CardKeyData from '../components/Profil/CardKeyData';

const Profil = () => {
  const userData = useLoaderData()
    
    if(!(userData.info || userData.dailyActivity || userData.avgSessions || userData.performance)){
      return <Navigate to="/404"/>
    }
    
  return (
    <main id={styles.profil}>
        <Sidebar/>
        <section className={styles.profilContent}>
          <h1>Bonjour <span className={styles.name}>{userData.info?.userInfos?.firstName}</span></h1>
          <span>Félicitation ! Vous avez explosé vos objectifs hier 👏</span>

          <div className={styles.container}>
            <div className={styles.info}>
              <div className={styles.chartsContainer}>
                <DailyActiveChart sessions={userData.dailyActivity?.sessions}/>
                <div className={styles.squareCharts}> 
                    <AverageSessionTime sessions={userData.avgSessions?.sessions}/>
                    <PerformenceSession performence={userData.performance?.data}/>
                    <Score score={userData.info?.score ? userData.info?.score : userData.info?.todayScore}/>
                </div>
              </div>

              <aside className={styles.stats}>
                <CardKeyData 
                  type={"Calories"} 
                  value={userData.info?.keyData?.calorieCount}
                />
                <CardKeyData 
                  type={"Proteines"} 
                  value={userData.info?.keyData?.proteinCount}
                />
                <CardKeyData 
                  type={"Glucides"} 
                  value={userData.info?.keyData?.carbohydrateCount}
                />
                <CardKeyData 
                  type={"Lipides"} 
                  value={userData.info?.keyData?.lipidCount}
                />
              </aside>
            </div>
          </div>
        </section>
    </main>
  )
}

export default Profil