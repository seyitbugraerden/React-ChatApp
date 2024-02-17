import React from "react";
import "../styles/social-buttons.css";
import { auth, provider } from "./config/firebaseConfig";
import { signInWithPopup } from "firebase/auth";
import Cookies from "universal-cookie";
const cookies = new Cookies();

const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    cookies.set("auth-token", result.user.refreshToken);
    window.location.reload();
    setIsSignIn(true);
  } catch (err) {
    console.log(err);
  }
};

function Auth({ setIsSignIn }) {
  return (
    <div className="auth">
      <button class="button button--social-login button--facebook" href="#">
        <i></i>Login With Facebook
      </button>
      <button onClick={signInWithGoogle}>Click Here for Sign In</button>
    </div>
  );
}

export default Auth;
