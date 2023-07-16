"use client"
import React,{useState} from 'react'
import ChatInput from '@/components/ChatInput'
import ChatScreen from '@/components/ChatScreen'
import UserListItem from '@/components/UserListItem'
import UserInfo from './UserInfo'
const ChatWindow = () => {
    const users = Array(100).fill(0).map((_:any,i:number) => `Shad cn ${i}`)
    const [selectedChatIndex,setSelectedChatIndex] = useState(-1)
    const handleChatClick = (user:string) => {
        setSelectedChatIndex(Number(user.split(" ").pop()))
    }   
  return (
    <div>
        {/* Navbar */}
        <div className='flex'>
            {/* Userlist */}
            <section className={`${selectedChatIndex !== -1 && 'hidden'} md:flex flex-col w-full md:flex-1 border-r h-screen`}>
                <UserInfo />
                    <div className='flex flex-col overflow-y-scroll'>
                    {users.map(user => <UserListItem key={user} username={user} onClick={() => handleChatClick(user)}/>)}
                    </div>
            </section>
            {/* Chat window */}
            <section className={`w-full ${selectedChatIndex === -1 ? 'hidden' : 'flex'} md:flex flex-col md:flex-[3] h-screen`}>
                {selectedChatIndex < 0 ?
                <div className='grid place-items-center h-full'>
                    <p className='text-gray-500'>Select a chat to start messaging</p>
                </div> : 
                <><ChatScreen index={selectedChatIndex} onBack={() => setSelectedChatIndex(-1)}/>
                <ChatInput /></>}
            </section>
        </div>
    </div>
  )
}

export default ChatWindow