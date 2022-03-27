import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCxQ63fvN6jQ76mHInSn8KJRgNWz2UwRxM",
  authDomain: "chatbox-shivalix09.firebaseapp.com",
  projectId: "chatbox-shivalix09",
  storageBucket: "chatbox-shivalix09.appspot.com",
  messagingSenderId: "693138571944",
  appId: "1:693138571944:web:fc137fbbe811060a02f89d",
};

const fire = firebase.initializeApp(firebaseConfig);
const db = fire.firestore();
const auth = firebase.auth();
export { fire, db, auth };
