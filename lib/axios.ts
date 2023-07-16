import  axios,{ AxiosRequestConfig } from 'axios'

const instance = axios.create({
    baseURL:process.env.NEXT_PUBLIC_BASE_URL
})

export const fetcher = async(config: AxiosRequestConfig<any>) => {
    try{
            config.headers = {
                'Authorization':`Bearer ${localStorage.getItem('token')}`
            }
        
        let {data} = await instance(config)
        return data
    }catch(err:any){
        if(!err.response.data.message){
            throw Error("Network Error")
        }
        throw Error(err.response.data.message)
    }
}

export default instance