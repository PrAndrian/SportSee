import mockdata from '../data/data'

const fetcher = async (type,url,userId) => {
    let res = null

    switch(type) {
        case "API":
            try{
                let response = await fetch(url);
                let data = await response.json()
                res = data.data
            }catch(error){
                console.log(error.message)
            }
        break;

        case "MOCK":
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
  