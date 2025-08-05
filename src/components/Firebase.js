// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCV8-SLmgYweecdR6LDy-nztMhOsHbLdyg",
  authDomain: "mapmystay-d7d2b.firebaseapp.com",
  projectId: "mapmystay-d7d2b",
  storageBucket: "mapmystay-d7d2b.firebasestorage.app",
  messagingSenderId: "482242651453",
  appId: "1:482242651453:web:84075ecc31e31960f45154",
  measurementId: "G-CSSY14V6PG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth=getAuth(app);