import axios from 'axios'

const fetchDataUser = async (userId) => {

    axios.get(`http://localhost:3000/user/${userId}`)
    .then(response => response.data.data)
    .catch(error => console.log(error.message));

    return 
};
  
export default fetchDataUser;