import React, { useState } from "react";
import "./Chat.scss";
import ChatHeader from "./ChatHeader";
import ChatMessage from "./ChatMessage";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import GifBoxIcon from "@mui/icons-material/GifBox";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import SendIcon from "@mui/icons-material/Send";
import { useAppSelector } from "../../app/hooks";
import { CollectionReference, DocumentData, addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase";
import useSubCollection from "../../hooks/useSubCollection";



const Chat = () => {
  const [inputText, setInputText] = useState<string>("");
  const channelName = useAppSelector((state) => state.channel.channelName);
  const channelId = useAppSelector((state) => state.channel.channelId);
  const user = useAppSelector((state) => state.user.user);
  const {subDocuments: messages} = useSubCollection("channels", "messages");

  const sendMessage = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    // channelsコレクションの中にあるmessageコレクションの中にメッセージ情報を入れる
    const collectionRef: CollectionReference<DocumentData> = collection(
      db,
      "channels",
      String(channelId),
      "messages"
    );

    await addDoc(collectionRef, {
      message: inputText,
      timestamp: serverTimestamp(),
      user: user
    });
    setInputText("");
  };

  return (
    <div className="chat">
      {/* chatHeader */}
      <ChatHeader channelName={channelName} />

      {/* chatMessage */}
      <div className="chatMessage">
        {messages.map((message, index) => (
          <ChatMessage key={index} message={message.message} timestamp={message.timestamp} user={message.user} />
        ))}
      </div>

      {/* chatInput */}
      <div className="chatInput">
        <AddCircleIcon className="chatInputIcon" />
        <form>
          <input type="text" placeholder="メッセージを送信" onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
            setInputText(e.target.value)} 
            value={inputText}
          />
          <div className="chatInputIcons">
            <CardGiftcardIcon />
            <GifBoxIcon />
            <EmojiEmotionsIcon />
            <button type="submit" className="chatInputButton" onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => 
                {sendMessage(e)}}>
              <SendIcon className="chatHeaderIcon" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Chat;
