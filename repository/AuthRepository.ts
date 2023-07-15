import axios from '@/lib/axios'


interface IUserProp{
    username:string,
    password:string
}

export const login  = async (user:IUserProp) : Promise<void> => {
    try{
        let {data} = await axios.post('/api/v1/login',user)
        return data
    }catch(err){
        throw Error("Network Error")
    }
}

export const signup  = async (user:IUserProp) : Promise<void> => {
    try{
        let {data} = await axios.post('/api/v1/signup',user)
        return data
    }catch(err){
        throw Error("Network Error")
    }
}