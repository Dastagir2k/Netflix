import React from "react";
import "./SignUpScreen.css";

function SignUpScreen() {
  return (
    <div className="SignUpScreen">
      <form>
        <h1>Sign in</h1>
        <input placeholder="Email" type="email" />
        <input placeholder="password" type="passsword" />
        <button>Sign In </button>
        <h4>
          <span className="SignUpScreen_gray">New to Netflix ? </span>
          <span className="SignUpScreen_link">SignUp Now . </span>
        </h4>
      </form>
    </div>
  );
}

export default SignUpScreen;
