"use client"
import React from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"



const ChatInput = () => {
  return (
    <form className='flex w-full py-4 px-6 gap-4'>
        <Input className='flex-1 bg-[#fff2]' placeholder='Type any message' />
        <Button>Send</Button>
    </form>
  )
}

export default ChatInput