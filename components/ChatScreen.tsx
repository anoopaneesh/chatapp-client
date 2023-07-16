"use client"
import React from 'react'
import ChatMessage from './ChatMessage'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {ArrowLeftIcon} from '@radix-ui/react-icons'

interface IChatScreenProps{
    index:number
    onBack:() => void
}

const ChatScreen = ({index,onBack}:IChatScreenProps) => {
  return (
    <>
    <div className='flex items-center gap-4 border-b shadow-md px-6 py-4' onClick={onBack}>
        <ArrowLeftIcon  className={`h-5 w-5 cursor-pointer ${index < 0 ? 'hidden' : 'block'} md:hidden`}/>
    <Avatar className="w-10 h-10">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <p className='leading-7 font-bold'>
            Shad cn {index}
        </p>
    </div>
    <div className='flex-1 flex flex-col overflow-y-scroll px-6 py-6 gap-4 md:gap-2'>
        <ChatMessage />
        <ChatMessage recieve/>
        <ChatMessage />
        <ChatMessage recieve/>
        <ChatMessage />
    </div>
    </>
  )
}

export default ChatScreen