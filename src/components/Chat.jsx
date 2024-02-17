import React, { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  serverTimestamp,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { auth, db } from "../components/config/firebaseConfig";

function Chat({ room }) {
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const messagesRef = collection(db, "messages");

  useEffect(() => {
    const queryMessages = query(messagesRef, where("room", "==", room));
    onSnapshot(queryMessages, (snapshot) => {
      let messages = [];
      snapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });
  }, []);

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
      <div className="text-msg-area">
        {messages.map((item) => (
          <div
            key={item.id}
            className={`text-msg ${
              item.user === auth.currentUser.displayName ? "right" : "left"
            }`}
          >
            <div>
              <p>{item.text}</p>
              <span>{item.user}</span>
            </div>

            <img src="https://bozemanschoolsfoundation.org/wp-content/uploads/2018/12/Missing-Person-Image.jpg" />
          </div>
        ))}
      </div>
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
