import React, { useEffect, useState } from "react";
import "./Chat.scss";
import ChatHeader from "./ChatHeader";
import ChatMessage from "./ChatMessage";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import GifBoxIcon from "@mui/icons-material/GifBox";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import SendIcon from "@mui/icons-material/Send";
import { useAppSelector } from "../../app/hooks";
import { CollectionReference, DocumentData, Timestamp, addDoc, collection, onSnapshot, orderBy, query, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase";

interface Messages {
  timestamp: Timestamp;
  message: string;
  user: {
    uid: string;
    photo: string;
    email: string;
    displayName: string;
  };
}

const Chat = () => {
  const [inputText, setInputText] = useState<string>("");
  const [messages, setMessages] = useState<Messages[]>([]);
  const channelName = useAppSelector((state) => state.channel.channelName);
  const channelId = useAppSelector((state) => state.channel.channelId);
  const user = useAppSelector((state) => state.user.user);

  useEffect(() => {
    const collectionRef = collection(db, "channels", String(channelId), "messages");
    const collectionRefOrderBy = query(collectionRef, orderBy("timestamp", "asc"));

    onSnapshot(collectionRefOrderBy, (snapshot) => {
      let results: Messages[] = [];
      snapshot.docs.forEach((doc) => {
        results.push({
          timestamp: doc.data().timestamp,
          message: doc.data().message,
          user: doc.data().user,
        });
      });
      setMessages(results);
    });
  }, [channelId]);

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
