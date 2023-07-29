import fetcher from './fetcher';
import UserModel from './UserModel';

async function profilRequest(userId){
  const type = 'API'
  console.log(type,'is used')
  
  const urlInfo = `http://localhost:3000/user/${userId}`
  const urlActivity = `http://localhost:3000/user/${userId}/activity`
  const urlAvgSessions= `http://localhost:3000/user/${userId}/average-sessions`
  const urlPerformance = `http://localhost:3000/user/${userId}/performance`

  const userInfo = await fetcher(type,urlInfo,userId)
  const userActivity  = await fetcher(type,urlActivity,userId)
  const userAvgSessions  = await fetcher(type,urlAvgSessions,userId)
  const userPerformance = await fetcher(type,urlPerformance,userId)
  
  return new UserModel(userInfo,userActivity,userAvgSessions,userPerformance)
}

export default profilRequest