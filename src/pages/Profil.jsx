import Sidebar from '../components/Profil/Sidebar'
import styles from '../styles/Profil.module.css'
import DailyActiveChart from '../components/Profil/DailyActiveChart';
import AverageSessionTime from '../components/Profil/AverageSessionTime';
import PerformenceSession from '../components/Profil/PerformenceSession';
import Score from '../components/Profil/Score';
import CardKeyData from '../components/Profil/CardKeyData';
import { useParams } from 'react-router';
import useProfilRequest from '../utils/useProfilRequest';

const Profil = () => {
  const {userId} = useParams()
  const userDataTest = useProfilRequest(userId)
  
  if(!userDataTest){
    return null
  }

  return (
    <main id={styles.profil}>
        <Sidebar/>
        <section className={styles.profilContent}>
          <h1>Bonjour <span className={styles.name}>{userDataTest.info?.userInfos?.firstName}</span></h1>
          <span>Félicitation ! Vous avez explosé vos objectifs hier 👏</span>

          <div className={styles.container}>
            <div className={styles.info}>
              <div className={styles.chartsContainer}>
                <DailyActiveChart sessions={userDataTest.dailyActivity?.sessions}/>
                <div className={styles.squareCharts}> 
                    <AverageSessionTime sessions={userDataTest.avgSessions?.sessions}/>
                    <PerformenceSession performence={userDataTest.performance?.data}/>
                    <Score score={userDataTest.info?.score ? userDataTest.info?.score : userDataTest.info?.todayScore}/>
                </div>
              </div>

              <aside className={styles.stats}>
                <CardKeyData 
                  type={"Calories"} 
                  value={userDataTest.info?.keyData?.calorieCount}
                />
                <CardKeyData 
                  type={"Proteines"} 
                  value={userDataTest.info?.keyData?.proteinCount}
                />
                <CardKeyData 
                  type={"Glucides"} 
                  value={userDataTest.info?.keyData?.carbohydrateCount}
                />
                <CardKeyData 
                  type={"Lipides"} 
                  value={userDataTest.info?.keyData?.lipidCount}
                />
              </aside>
            </div>
          </div>
        </section>
    </main>
  )
}

export default Profil