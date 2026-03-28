/**
 * If Google sign-in fails with auth/invalid-continue-uri or auth/unauthorized-domain,
 * add your dev URL’s hostname under Firebase Console → Authentication → Settings →
 * Authorized domains (localhost ≠ 127.0.0.1; include LAN IP if you use it).
 */
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "aiinterviewagent-e85bc.firebaseapp.com",
  projectId: "aiinterviewagent-e85bc",
  storageBucket: "aiinterviewagent-e85bc.firebasestorage.app",
  messagingSenderId: "414191390570",
  appId: "1:414191390570:web:31b63e784b158f97041f13"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}





// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
//   authDomain: "aiinterviewagent-e85bc.firebaseapp.com",
//   projectId: "aiinterviewagent-e85bc",
//   storageBucket: "aiinterviewagent-e85bc.firebasestorage.app",
//   messagingSenderId: "414191390570",
//   appId: "1:414191390570:web:b63c40364b8708d1041f13"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// const auth = getAuth(app);

// const provider = new GoogleAuthProvider()

// export {auth , provider}