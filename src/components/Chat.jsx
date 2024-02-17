import React, { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { auth, db } from "../components/config/firebaseConfig";

function Chat({ room }) {
  const [newMessage, setNewMessage] = useState("");

  const messagesRef = collection(db, "messages");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newMessage === "") return;
    await addDoc(messagesRef, {
      text: newMessage,
      createdAt: serverTimestamp(),
      user: auth.currentUser.displayName,
      room,
    });
    setNewMessage("");
  };
  return (
    <div className="chat-app">
      <form className="new-message-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={newMessage}
          className="new-message-input"
          placeholder="Type Your Message"
          onChange={(e) => {
            setNewMessage(e.target.value);
          }}
        />
        <button type="submit" className="send-button">
          Send
        </button>
      </form>
    </div>
  );
}

export default Chat;
