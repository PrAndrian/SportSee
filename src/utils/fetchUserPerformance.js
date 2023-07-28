import axios from 'axios'

const fetchUserData = async (userId,getter) => {
    axios.get(`http://localhost:3000/user/${userId}/performance`)
    .then(response => {
      const data = response.data.data;
      getter(data)
    })
}
  
export default fetchUserData;