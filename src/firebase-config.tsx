// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_F_FxlTjbQbxmGY9mslYYeUGW_Vy7Erc",
  authDomain: "timetable-794df.firebaseapp.com",
  databaseURL: "https://timetable-794df.firebaseio.com",
  projectId: "timetable-794df",
  storageBucket: "timetable-794df.appspot.com",
  messagingSenderId: "955356131356",
  appId: "1:955356131356:web:a68eb67c9ac3e5dbfb2fd9",
  measurementId: "G-2FNTJYZQ4C",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);
