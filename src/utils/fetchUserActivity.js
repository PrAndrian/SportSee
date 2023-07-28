import axios from 'axios'

const fetchUserData = async (userId,getter) => {
    axios.get(`http://localhost:3000/user/${userId}/activity`)
    .then(response => {
      const data = response.data.data;
      getter(data)
    })
    .catch(error => console.log(error.message));
}
  
export default fetchUserData;