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
      <h2>Sign In</h2>
      <div>
        <button
          className="button button--social-login button--googleplus"
          onClick={signInWithGoogle}
        >
          <i className="pi pi-google"></i>Login With Google
        </button>
        <button
          disabled
          className="button button--social-login button--facebook disabled"
        >
          <i className="pi pi-facebook"></i>Login With Facebook
        </button>
        <button
          disabled
          className="button button--social-login button--linkedin disabled"
        >
          <i className="pi pi-linkedin"></i>Login With Linkedin
        </button>
        <button
          disabled
          className="button button--social-login button--twitter disabled"
        >
          <i className="pi pi-twitter"></i>Login With Twitter
        </button>
      </div>
    </div>
  );
}

export default Auth;
