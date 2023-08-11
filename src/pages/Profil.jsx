/* eslint-disable linebreak-style */
/* eslint-disable react/react-in-jsx-scope */
import { Navigate, useLoaderData } from 'react-router';
import styles from '../styles/Profil.module.css';
import Sidebar from '../components/Profil/Sidebar';
import DailyActiveChart from '../components/Profil/DailyActiveChart';
import AverageSessionTime from '../components/Profil/AverageSessionTime';
import PerformenceSession from '../components/Profil/PerformenceSession';
import Score from '../components/Profil/Score';
import CardKeyData from '../components/Profil/CardKeyData';

/**
 * Page du profil utilisateur.
 *
 * @component
 * @returns {JSX.Element} Le composant React.
 */
function Profil() {
  const userData = useLoaderData();
  if (!(
    userData.id
    || userData.info
    || userData.todayScore
    || userData.keyData
    || userData.dailyActivity
    || userData.avgSessions
    || userData.performance
  )) {
    return <Navigate to="/404" />;
  }

  document.title = `SportSee - Profil de ${userData.info?.userInfos?.firstName} ${userData.info?.userInfos?.lastName}`;

  return (
    <main id={styles.profil}>
      <Sidebar />
      <section className={styles.profilContent}>
        <h1>
          Bonjour&nbsp;
          <span className={styles.name}>{userData.info?.userInfos?.firstName}</span>
        </h1>
        <span>Félicitation ! Vous avez explosé vos objectifs hier 👏</span>

        <div className={styles.container}>
          <div className={styles.info}>
            <div className={styles.chartsContainer}>
              <DailyActiveChart sessions={userData.dailyActivity?.sessions} />
              <div className={styles.squareCharts}>
                <AverageSessionTime sessions={userData.avgSessions?.sessions} />
                <PerformenceSession performence={userData.performance?.data} />
                <Score score={userData.todayScore} />
              </div>
            </div>

            <aside className={styles.stats}>
              <CardKeyData
                type="Calories"
                value={userData.keyData?.calorieCount}
              />
              <CardKeyData
                type="Proteines"
                value={userData.keyData?.proteinCount}
              />
              <CardKeyData
                type="Glucides"
                value={userData.keyData?.carbohydrateCount}
              />
              <CardKeyData
                type="Lipides"
                value={userData.keyData?.lipidCount}
              />
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Profil;
