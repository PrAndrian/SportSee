/* eslint-disable linebreak-style */
/* eslint-disable no-console */
import mockdata from '../data/data';

/**
 * Effectue une requête API pour récupérer des données.
 *
 * @async
 * @function
 * @param {string} type - Chaine de caractère indiquant la manière de fetch
 * (depuis Mock Data ou API).
 * @param {string} url - L'URL de l'API.
 * @param {string} userId - Chaine de caractère représentant l'id utilisateur.
 * @returns {Promise<any>} Une promesse qui se résout avec les données récupérées.
 */
const fetcher = async (type, url, userId) => {
  let res = null;
  let index = -1;
  const mockDataUser = [
    mockdata.USER_MAIN_DATA,
    mockdata.USER_ACTIVITY,
    mockdata.USER_AVERAGE_SESSIONS,
    mockdata.USER_PERFORMANCE,
  ];

  switch (type) {
    case 'API':
      try {
        const response = await fetch(url);
        const data = await response.json();
        res = data.data;
      } catch (error) {
        throw new Response(`${error.message}`, { status: 404 });
      }
      break;

    case 'MOCK':

      if (url.includes('activity')) {
        index = 1;
      } else if (url.includes('average')) {
        index = 2;
      } else if (url.includes('performance')) {
        index = 3;
      } else {
        index = 0;
      }

      try {
        res = mockDataUser[index].find((user) => {
          if (user.userId) {
            return user.userId === Number(userId);
          }

          return user.id === Number(userId);
        });
      } catch (error) {
        throw new Response(`${error.message}`, { status: 404 });
      }
      break;

    default: break;
  }
  return res;
};

export default fetcher;
