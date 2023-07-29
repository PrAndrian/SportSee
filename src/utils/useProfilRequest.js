import axios from 'axios'
import data from '../data/data'
import UserModel from './UserModel';
import { useEffect, useState } from 'react';

const mockdata = false;

const fetchUserInfo = async (userId,setter) => {
  if(!mockdata){
    axios.get(`http://localhost:3000/user/${userId}`)
    .then(response => {
      const data = response.data.data;
      console.log("API DATA USED")
      setter(data)
    })
    .catch(error => console.log(error.message));
  }else{
    try {
      const res = data.USER_MAIN_DATA.find((user) => user.id === Number(userId));
      setter(res)
      console.log("MOCK DATA USED")
    } catch (e) {
      console.log(e.message)
    }
  }
}

const fetchUserActivity = async (userId,setter) => {
    if(!mockdata){
      axios.get(`http://localhost:3000/user/${userId}/activity`)
      .then(response => {
        const data = response.data.data;
        console.log("API DATA USED")
        setter(data)
      })
      .catch(error => console.log(error.message));
    }else{
      try {
        const res = data.USER_ACTIVITY.find((user) => user.userId === Number(userId));
        setter(res)
        console.log("MOCK DATA USED")
      } catch (e) {
        console.log(e.message)
      }
    }
}

const fetchUserAvgSessions = async (userId,setter) => {
    if(!mockdata){
      axios.get(`http://localhost:3000/user/${userId}/average-sessions`)
      .then(response => {
        const data = response.data.data;
        console.log("API DATA USED")
        setter(data)
      })
      .catch(error => console.log(error.message));
    }else{
      try {
        const res = data.USER_AVERAGE_SESSIONS.find((user) => user.userId === Number(userId));
        setter(res)
        console.log("MOCK DATA USED")
      } catch (e) {
        console.log(e.message)
      }
    }
}
  
const fetchUserPerformance = async (userId,setter) => {
    if(!mockdata){
      axios.get(`http://localhost:3000/user/${userId}/performance`)
      .then(response => {
        const data = response.data.data;
        console.log("API DATA USED")
        setter(data)
      })
      .catch(error => console.log(error.message));
    }else{
      try {
        const res = data.USER_PERFORMANCE.find((user) => user.userId === Number(userId));
        setter(res)
        console.log("MOCK DATA USED")
      } catch (e) {
        console.log(e.message)
      }
    }
}

const useProfilRequest = (userId) => {
    const [userInfo,setUserInfo] = useState({})
    const [userActivity,setActivity] = useState({})
    const [userAvgSessions,setAvgSessions] = useState({})
    const [userPerformance,sePerformance] = useState({})

    useEffect(() => {
      fetchUserInfo(userId,setUserInfo)
      fetchUserActivity(userId,setActivity)
      fetchUserAvgSessions(userId,setAvgSessions)
      fetchUserPerformance(userId,sePerformance)
    }, [userId])          
    
    return new UserModel(userInfo,userActivity,userAvgSessions,userPerformance)
}


export default useProfilRequest