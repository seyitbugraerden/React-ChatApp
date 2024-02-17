import { useState, useRef } from "react";
import Auth from "./components/Auth";
import Cookies from "universal-cookie";
import Chat from "./components/Chat";
import { Card } from "primereact/card";
import "./styles/app.css";
const cookies = new Cookies();

function App() {
  const [isSignIn, setIsSignIn] = useState(cookies.get("auth-token")); // boolean
  const [room, setRoom] = useState(null);

  const roomInputRef = useRef(null);

  return (
    <Card title="Sign In">
      {isSignIn ? (
        room ? (
          <Chat room={room} />
        ) : (
          <div className="room">
            <input
              type="text"
              placeholder="Chat Room Name"
              ref={roomInputRef}
            />
            <button
              onClick={() => {
                setRoom(roomInputRef.current.value);
              }}
            >
              Enter Chat
            </button>
          </div>
        )
      ) : (
        <Auth setIsSignIn={setIsSignIn} />
      )}
    </Card>
  );
}

export default App;
