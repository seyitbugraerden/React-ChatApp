import { useState, useRef } from "react";
import Auth from "./components/Auth";
import Cookies from "universal-cookie";
import Chat from "./components/Chat";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import "./styles/app.css";
const cookies = new Cookies();

function App() {
  const [isSignIn, setIsSignIn] = useState(cookies.get("auth-token")); // boolean
  const [room, setRoom] = useState(null);

  const roomInputRef = useRef(null);

  return (
    <Card>
      {isSignIn ? (
        room ? (
          <Chat room={room} />
        ) : (
          <div className="room">
            <h2>Enter Chat Room</h2>
            <div className="buttonarea">
              <InputText
                type="text"
                placeholder="Chat Room Name"
                ref={roomInputRef}
              />
              <div
                className="two-part-button"
                onClick={() => {
                  setRoom(roomInputRef.current.value);
                }}
              >
                <div className="call-to-action">JOIN</div>
                <div className="description">happy chatting !</div>
              </div>
            </div>
          </div>
        )
      ) : (
        <Auth setIsSignIn={setIsSignIn} />
      )}
    </Card>
  );
}

export default App;
