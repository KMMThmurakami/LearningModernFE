import React from 'react'
import "./ChatMessage.scss";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const ChatMessage = () => {
  return (
    <div className='message'>
      <AccountCircleIcon />
      <div className='messageInfo'>
        <h4>
          Kumamon
          <span className='messageTimestamp'>2024/01/15</span>
        </h4>
        <p className='messageText'>メッセージ本文</p>
      </div>
    </div>
  )
}

export default ChatMessage
