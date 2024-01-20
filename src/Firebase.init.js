// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxnUTn4eS3jL7q-7qABO7fhWLT2PsPjMc",
  authDomain: "ema-john-semple-6b7ae.firebaseapp.com",
  projectId: "ema-john-semple-6b7ae",
  storageBucket: "ema-john-semple-6b7ae.appspot.com",
  messagingSenderId: "187293287036",
  appId: "1:187293287036:web:b57055db95170f226abff9",
  measurementId: "G-GW3T6X8WM7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

export default auth;

