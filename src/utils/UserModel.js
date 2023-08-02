/* eslint-disable linebreak-style */
/**
 * Représente un modèle pour les données utilisateur.
 *
 * @class UserModel
 * @classdesc Cette classe représente un modèle pour les données utilisateur.
 * @param {number} id - L'identifiant de l'utilisateur.
 * @param {Object} info - Les informations sur l'utilisateur.
 * @param {number} todayScore - Le score actuel de l'utilisateur.
 * @param {Object} keyData - Les données clés de l'utilisateur.
 * @param {Array} dailyActivity - Les activités quotidiennes de l'utilisateur.
 * @param {number} avgSessions - Le nombre moyen de sessions de l'utilisateur.
 * @param {Object} performance - Les performances de l'utilisateur.
 */
class UserModel {
  constructor(
    id,
    info,
    todayScore,
    keyData,
    dailyActivity,
    avgSessions,
    performance,
  ) {
    this.id = id;
    this.info = info;
    this.todayScore = todayScore;
    this.keyData = keyData;
    this.dailyActivity = dailyActivity;
    this.avgSessions = avgSessions;
    this.performance = performance;
  }
}
export default UserModel;
