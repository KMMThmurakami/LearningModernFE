import React, { useEffect, useState } from "react";
import "./App.scss";
import Sidebar from "./component/sidebar/Sidebar";
import Chat from "./component/chat/Chat";
import Login from "./component/login/Login";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { auth } from "./firebase";
import { login, logout } from "./features/userSlice";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "./utils/errorFallback";
import useCollection from "./hooks/useCollection"; // import useCollection
import { setChannelInfo } from "./features/channelSlice";

type Channels = {
  id: string;
  channel: {
    channelName: string;
  };
};

function App() {
  const user = useAppSelector((state) => state.user.user);

  const dispatch = useAppDispatch();
  const [initialChannel, setInitialChannel] = useState<Channels | null>(null); // 初期チャンネルの型を修正

  // 第二引数は配列、配列の中の変数が更新されるたびにuseEffectの中の関数が発火する
  useEffect(() => {
    auth.onAuthStateChanged((loginUser) => {
      if (loginUser) {
        dispatch(
          login({
            uid: loginUser.uid,
            photo: loginUser.photoURL,
            email: loginUser.email,
            displayName: loginUser.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  const { documents: channels } = useCollection("channels"); // Fetch channels
  const channelsOrderBy = channels.sort((a, b) =>
    a.channel.channelName.localeCompare(b.channel.channelName)
  );

  useEffect(() => {
    // When channels are loaded, select the first one
    if (channelsOrderBy && channelsOrderBy.length > 0 && !initialChannel) {
      setInitialChannel(channelsOrderBy[0] as Channels | null); // channelsOrderBy[0] を Channels | null に変換
    }
  }, [channelsOrderBy, initialChannel]);

  useEffect(() => {
    // Set initial channel when it's available
    if (initialChannel) {
      dispatch(
        setChannelInfo({
          channelId: initialChannel.id,
          channelName: initialChannel.channel.channelName,
        })
      );
    }
  }, [initialChannel, dispatch]);

  return (
    <div className="App">
      {user ? (
        <>
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Sidebar />
          </ErrorBoundary>
          <Chat />
        </>
      ) : (
        <>
          <Login />
        </>
      )}
    </div>
  );
}

export default App;
