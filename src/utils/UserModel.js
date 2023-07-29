class UserModel {
    constructor(info,dailyActivity, avgSessions, performance) {
        this.info = info;
        this.dailyActivity = dailyActivity;
        this.avgSessions = avgSessions;
        this.performance = performance;
    }
}

export default UserModel