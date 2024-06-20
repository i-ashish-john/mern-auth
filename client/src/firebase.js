// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDiORc6NrjuLCZvAgZG5CcmeddQCIidR0E",
  authDomain: "mern-auth-image-store.firebaseapp.com",
  projectId: "mern-auth-image-store",
  storageBucket: "mern-auth-image-store.appspot.com",
  messagingSenderId: "371774501081",
  appId: "1:371774501081:web:161f5b4455dc1a71238ec8",
  measurementId: "G-M7RNFGXEPF"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);