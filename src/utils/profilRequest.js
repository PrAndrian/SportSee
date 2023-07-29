import fetcher from './fetcher';
import UserModel from './UserModel';

function profilRequest(userId){
  const type = 'MOCK'
  const urlInfo = `http://localhost:3000/user/${userId}`
  const urlActivity = `http://localhost:3000/user/${userId}/activity`
  const urlAvgSessions= `http://localhost:3000/user/${userId}/average-sessions`
  const urlPerformance = `http://localhost:3000/user/${userId}/performance`

  const userInfo  = fetcher(type,urlInfo,userId)
  const userActivity  = fetcher(type,urlActivity,userId)
  const userAvgSessions  = fetcher(type,urlAvgSessions,userId)
  const userPerformance = fetcher(type,urlPerformance,userId)

  return new UserModel(userInfo,userActivity,userAvgSessions,userPerformance)
}

export default profilRequest