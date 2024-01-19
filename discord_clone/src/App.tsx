import React from "react";
import "./App.scss";
import Sidebar from "./component/sidebar/Sidebar";
import Chat from "./component/chat/Chat";
import Login from "./component/login/Login";
import { useSelector } from "react-redux";

function App() {

  // const user = useSelector((state) => state.user.user);
  const user =null;

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
