import axios, { fetcher } from '@/lib/axios'


interface User{
    username:string,
    password:string
}

export const login  = async (user:User)  => fetcher({
        method:'post',
        url:"/api/v1/auth/login",
        data:user
    }).then(data => {
        localStorage.setItem('token',data.token)
        return data
    })


export const signup  = async (user:User) => fetcher({
    method:'post',
    url:"/api/v1/auth/signup",
    data:user
}).then(data => {
    localStorage.setItem('token',data.token)
    return data
})



