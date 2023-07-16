"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import React from 'react'

interface IUserListItemProps{
    username:string
    onClick:() => void
}

const UserListItem = ({username,onClick}:IUserListItemProps) => {
  return (
    <div className="flex items-center gap-4 h-16 px-6 border-b flex-shrink-0 hover:bg-[#fff2] transition-all cursor-pointer" onClick={onClick}>
        <Avatar className="w-10 h-10">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <p className="leading-7">{username}</p>
    </div>
  )
}

export default UserListItem