import React from "react";
import "./SignUpScreen.css";
import { useRef } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import db, { auth } from "../firebase";

function SignUpScreen() {
  const emailRef = useRef(null);
  const passRef = useRef(null);
  const register = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passRef.current.value;
    createUserWithEmailAndPassword(db, email, password)
      .then((authuser) => {
        console.log("Data", authuser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const signIn = (e) => {
    e.preventDefault();
  };
  return (
    <div className="SignUpScreen">
      <form>
        <h1>Sign in</h1>
        <input ref={emailRef} placeholder="Email" type="email" />
        <input ref={passRef} placeholder="password" type="passsword" />
        <button onClick={signIn}>Sign In </button>
        <h4>
          <span className="SignUpScreen_gray">New to Netflix ? </span>
          <span className="SignUpScreen_link" onClick={register}>
            SignUp Now .{" "}
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignUpScreen;
