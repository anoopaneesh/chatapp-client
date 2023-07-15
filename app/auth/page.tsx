import AuthForm from '@/components/AuthForm'
import { ModeToggle } from '@/components/ui/mode-toggle'
import React from 'react'

const page = () => {
  return (
    <main className='grid place-items-center h-screen relative'>
        <div className='absolute right-10 top-10'>
        <ModeToggle />
        </div>
        <AuthForm />
    </main>
  )
}

export default page