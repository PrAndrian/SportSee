/* eslint-disable linebreak-style */
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
