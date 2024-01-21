import React from "react";
import "./App.scss";
import Sidebar from "./component/sidebar/Sidebar";
import Chat from "./component/chat/Chat";
import Login from "./component/login/Login";
import { useAppSelector } from "./app/hooks";

function App() {

  const user = useAppSelector((state) => state.user);

  return (
    <div className="App">

      {user ? (
        <>
          <Sidebar />
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
