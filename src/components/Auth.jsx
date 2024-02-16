import React from "react";
import { auth, provider } from "./config/firebaseConfig";
import { signInWithPopup } from "firebase/auth";

const signInWithGoogle = async () => {
  await signInWithPopup(auth, provider);
};

function Auth() {
  return (
    <div className="auth">
      <p>Sign In With Google to Continue</p>
      <button onClick={signInWithGoogle}>Click Here for Sign In</button>
    </div>
  );
}

export default Auth;
