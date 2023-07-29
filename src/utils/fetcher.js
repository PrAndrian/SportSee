import mockdata from '../data/data'
import axios from 'axios'

const fetcher = (type,url,userId) => {
    let res = null

    const mockDataUser = [
        mockdata.USER_MAIN_DATA,
        mockdata.USER_ACTIVITY,
        mockdata.USER_AVERAGE_SESSIONS,
        mockdata.USER_PERFORMANCE
    ]

    let index = -1;
    if(url.includes('activity')){
        index = 1
    }else if(url.includes('average')){
        index = 2
    } else if(url.includes('performance')){
        index = 3
    }else{
        index = 0
    }

    switch(type) {
        case "API":
            axios.get(url)
            .then(response => {
                res = response.data.data;
            })        
            .catch(error => console.log(error.message));
        break;
        case "MOCK":
            try {
                res = mockDataUser[index].find((user) => {
                    if(user.userId) {
                        return user.userId === Number(userId)
                    }
                    else{
                        return user.id === Number(userId)
                    }
                });
            } catch (e) {
                console.log(e.message)
            }
        break;

        default: break
    }
    return res;
};

export default fetcher
  