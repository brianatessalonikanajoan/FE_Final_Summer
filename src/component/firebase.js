// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkbWCuXmZN_Sdx99pnsyN0Y55BtDe3T9M",
  authDomain: "finalprojectfe-85df8.firebaseapp.com",
  projectId: "finalprojectfe-85df8",
  storageBucket: "finalprojectfe-85df8.appspot.com",
  messagingSenderId: "354523186385",
  appId: "1:354523186385:web:5dd9c6eb8f8cf8998fb1f0",
  measurementId: "G-5NXP40VJHF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);