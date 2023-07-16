"use client"
import React,{useState,useRef} from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { login,signup } from '@/repository/AuthRepository'
import { useToast } from "@/components/ui/use-toast"

const AuthForm = () => {
  const [isLogin,setIsLogin] = useState(true)
  const [isLoading,setIsLoading] = useState(false)
  const usernameRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const { toast } = useToast()
  const handleAuth = (e: React.FormEvent) => {
    setIsLoading(true)
    e.preventDefault()
    const user = {
      username:usernameRef.current?.value!,
      password : passwordRef.current?.value!
    }
    if(isLogin){
      login(user).then((data)=>{
        console.log(data)
      }).catch(err => {
        toast({
          title: "Uh oh! Something went wrong.",
          description: err.message,
        })
      }).finally(()=>{
        setIsLoading(false)
      })
    }else{
      signup(user).then(data => {
        console.log(data)
      }).catch(err => {
        toast({
          title: "Uh oh! Something went wrong.",
          description: err.message,
        })
      }).finally(()=>{
        setIsLoading(false)
      })
    }
  }

  return (
    <form className='flex flex-col gap-4 w-96' onSubmit={handleAuth}>
       <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">
        {isLogin ? "Login." : "Signup."}
      </h1>
        <Input ref={usernameRef} type="text" placeholder='Enter username' />
        <Input ref={passwordRef} type="password" placeholder='Enter password' />
        <Button disabled={isLoading}>{isLogin ? 'Login' : 'Signup'}</Button>
        <Button type="button" variant="ghost" onClick={() => {setIsLogin(state=>!state)}}>{isLogin ? 'Not a user?' : 'Already a user?'}</Button>
       </form>
  )
}

export default AuthForm