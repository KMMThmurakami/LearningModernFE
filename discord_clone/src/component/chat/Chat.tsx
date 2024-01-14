import React from 'react'
import "./Chat.scss";
import ChatHeader from "./ChatHeader";
import ChatMessage from "./ChatMessage";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import GifBoxIcon from '@mui/icons-material/GifBox';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import SendIcon from '@mui/icons-material/Send';

const Chat = () => {
  return (
    <div className="chat">
      {/* chatHeader */}
      <ChatHeader />

      {/* chatMessage */}
      <div className="chatMessage">
        <ChatMessage />
        <ChatMessage />
      </div>

      {/* chatInput */}
      <div className="chatInput">
        <AddCircleIcon />
        <form>
          <input type="text" placeholder='メッセージを送信'/>
          <div className='chatInputIcons'>
            <CardGiftcardIcon />
            <GifBoxIcon />
            <EmojiEmotionsIcon />
            <button type='submit' className='chatInputButton'><SendIcon className="chatHeaderIcon" /></button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Chat
