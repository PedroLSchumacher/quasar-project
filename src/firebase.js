// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUUOva9l2E6y7naY-lwztdb51lNxWLRoM",
  authDomain: "quasar-project-36e00.firebaseapp.com",
  databaseURL: "https://quasar-project-36e00-default-rtdb.firebaseio.com",
  projectId: "quasar-project-36e00",
  storageBucket: "quasar-project-36e00.appspot.com",
  messagingSenderId: "488354966700",
  appId: "1:488354966700:web:64e6e95690f513a7660309",
  measurementId: "G-QSLSKY322N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
