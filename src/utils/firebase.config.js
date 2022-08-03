
import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const app = firebase.initializeApp({
    apiKey: "AIzaSyDE_E_nKLmP2uRxQrXsjYKE8uMU-q3-bKQ",
    authDomain: "react-redux-firebase-4a9d5.firebaseapp.com",
    projectId: "react-redux-firebase-4a9d5",
    storageBucket: "react-redux-firebase-4a9d5.appspot.com",
    messagingSenderId: "102916483934",
    appId: "1:102916483934:web:6b7a101f95281dfe127dcf"
 });

export const auth = app.auth();
export default app;