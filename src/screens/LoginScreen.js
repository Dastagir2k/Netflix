import React, { useState } from "react";
import "./LoginScreen.css";
import SignInScreen from "./SignUpScreen";
import SignUpScreen from "./SignUpScreen";

function LoginScreen() {
  const [signIn, setSignIn] = useState(false);
  return (
    <div className="LoginScreen">
      <div className="LoginScreen_background">
        <img
          className="LoginScreen_Logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="netflix"
        />
        <button className="LoginScreen_button" onClick={() => setSignIn(true)}>
          Signin
        </button>
        <div className="LoginScreen_gradient" />
        <div className="LoginScreen_body">
          {signIn ? (
            <SignUpScreen />
          ) : (
            <>
              <h1>Unlimited Flims , Tv programmes and more.</h1>
              <h2>Watch anywhere . Cancel at any time .</h2>
              <h3>
                Ready to watch? Enter your mail to create or restart your
                membership
              </h3>
              <div className="Loginscreen_input">
                <form>
                  <input type="email" placeholder="Email Address" />
                  <button
                    className="LoginScreen_getstarted"
                    onClick={() => setSignIn(true)}
                  >
                    Get started
                  </button>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
