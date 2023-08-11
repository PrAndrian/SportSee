/* eslint-disable linebreak-style */
import fetcher from './fetcher';
import UserModel from './UserModel';

/**
 * Effectue une requête API pour récupérer des données de l'utilisateur.
 *
 * @async
 * @function
 * @param {string} userId - Chaine de caractère représentant l'id utilisateur.
 * @returns {UserModel} une classe qui représentant l'utilisateur et ses données.
 */
async function profilRequest(userId) {
  const type = 'MOCK'; // API or MOCK
  // eslint-disable-next-line no-console
  console.log(type, 'used');

  const urlInfo = `http://localhost:3000/user/${userId}`;
  const urlActivity = `http://localhost:3000/user/${userId}/activity`;
  const urlAvgSessions = `http://localhost:3000/user/${userId}/average-sessions`;
  const urlPerformance = `http://localhost:3000/user/${userId}/performance`;

  const userInfo = await fetcher(type, urlInfo, userId);
  const userActivity = await fetcher(type, urlActivity, userId);
  const userAvgSessions = await fetcher(type, urlAvgSessions, userId);
  const userPerformance = await fetcher(type, urlPerformance, userId);

  return new UserModel(
    userInfo.id,
    userInfo,
    userInfo.score ? userInfo.score : userInfo.todayScore,
    userInfo.keyData,
    userActivity,
    userAvgSessions,
    userPerformance,
  );
}

export default profilRequest;
