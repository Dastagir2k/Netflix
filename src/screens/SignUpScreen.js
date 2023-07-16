// import React from "react";
// import "./SignUpScreen.css";
// import { useRef } from "react";
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
// } from "firebase/auth";
// import { auth } from "../firebase";

// function SignUpScreen() {
//   const emailRef = useRef(null);
//   const passRef = useRef(null);
//   const register = (e) => {
//     e.preventDefault();
//     const email = emailRef.current.value;
//     const password = passRef.current.value;
//     auth
//       .createUserWithEmailAndPassword(
//         emailRef.current.value,
//         passRef.current.value
//       )
//       .then((authuser) => {
//         console.log("New2 user", authuser);
//       })
//       .catch((error) => {
//         alert(error.message);
//       });
//   };

//   const signIn = (e) => {
//     e.preventDefault();
//     // signInWithEmailAndPassword(emailRef.current.value, passRef.current.value)
//     //   .then((authuser) => {
//     //     console.log("Sign in user :", authuser);
//     //   })
//     //   .catch((error) => {
//     //     console.log(error);
//     //     alert(error.message);
//     //   });
//   };
//   return (
//     <div className="SignUpScreen">
//       <form>
//         <h1>Sign in</h1>
//         <input ref={emailRef} placeholder="Email" type="email" />
//         <input ref={passRef} placeholder="password" type="passsword" />
//         <button onClick={signIn}>Sign In </button>
//         <h4>
//           <span className="SignUpScreen_gray">New to Netflix ? </span>
//           <span className="SignUpScreen_link" onClick={register}>
//             SignUp Now .{" "}
//           </span>
//         </h4>
//       </form>
//     </div>
//   );
// }

// export default SignUpScreen;

import React from "react";
import "./SignUpScreen.css";
import { useRef } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";

function SignUpScreen() {
  const emailRef = useRef(null);
  const passRef = useRef(null);

  const register = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passRef.current.value;

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authuser) => {
        console.log("New user", authuser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const signIn = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passRef.current.value;

    auth
      .signInWithEmailAndPassword(email, password)
      .then((authuser) => {
        console.log("Sign in user:", authuser);
      })
      .catch((error) => {
        console.log(error);
        alert(error.message);
      });
  };

  return (
    <div className="SignUpScreen">
      <form>
        <h1>Sign in</h1>
        <input ref={emailRef} placeholder="Email" type="email" />
        <input ref={passRef} placeholder="Password" type="password" />
        <button onClick={signIn}>Sign In</button>
        <h4>
          <span className="SignUpScreen_gray">New to Netflix?</span>
          <span className="SignUpScreen_link" onClick={register}>
            Sign Up Now.
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignUpScreen;
