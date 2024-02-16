import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCr7br6RBHPsNwDHKMcctibPsdi9SyBMBw",
  authDomain: "chat-app-db13b.firebaseapp.com",
  projectId: "chat-app-db13b",
  storageBucket: "chat-app-db13b.appspot.com",
  messagingSenderId: "1010845666598",
  appId: "1:1010845666598:web:a37b77490471392dbcc5e7",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
