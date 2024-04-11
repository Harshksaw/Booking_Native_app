// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    
  apiKey: process.env.api_key,
  authDomain: "booking-818b2.firebaseapp.com",
  projectId: "booking-818b2",
  storageBucket: "booking-818b2.appspot.com",
  messagingSenderId: "1032373316545",
  appId: "1:1032373316545:web:efd99bc18abe1b76a65d40",
  measurementId: "G-1MFSK0PPSK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
