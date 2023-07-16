// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBscRIJHXz8J1fyKRINtYxnXX41hhdhLVg",
  authDomain: "netflix-7ae6f.firebaseapp.com",
  projectId: "netflix-7ae6f",
  storageBucket: "netflix-7ae6f.appspot.com",
  messagingSenderId: "343999036540",
  appId: "1:343999036540:web:13c4be8e4050ec7f0c1df9",
};

// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
// const auth = firebase.auth();

// export { auth };
// export default { db };
const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebaseApp.auth();
const db = firebaseApp.firestore();

export { auth, db };
export default db;
