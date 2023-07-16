import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from './ui/button'
import { ExitIcon } from '@radix-ui/react-icons'
const UserInfo = () => {
  return (
    <div className='flex items-center gap-4 border-b-2 shadow-md px-6 py-4'>
    <Avatar className="w-10 h-10">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <p className='leading-7 font-bold'>
            Shad cn
        </p>
        <div className='flex-1'></div>
        <Button variant="secondary">
            <ExitIcon />
        </Button>
    </div>
  )
}

export default UserInfo