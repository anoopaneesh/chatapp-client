import React from 'react'

interface IChatMessageProps{
    recieve?:boolean
}

const ChatMessage = ({recieve} : IChatMessageProps) => {
  return (
    <div className={`p-2 rounded-sm w-3/4 md:max-w-sm bg-[#fff2] ${recieve && 'self-end bg-blue-900'}`}>
        <p className='leading-5 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, assumenda ipsam dicta laboriosam iste</p>
    </div>
  )
}

export default ChatMessage