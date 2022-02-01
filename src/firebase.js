import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCxQ63fvN6jQ76mHInSn8KJRgNWz2UwRxM",
    authDomain: "chatbox-shivalix09.firebaseapp.com",
    projectId: "chatbox-shivalix09",
    storageBucket: "chatbox-shivalix09.appspot.com",
    messagingSenderId: "693138571944",
    appId: "1:693138571944:web:fc137fbbe811060a02f89d"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
// const auth = firebase.auth();

export { db };