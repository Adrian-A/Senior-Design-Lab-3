// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8zkx6kq8RmZA92CC4oVbeNySBB2jKrpk",
  authDomain: "lab3-3f42a.firebaseapp.com",
  projectId: "lab3-3f42a",
  storageBucket: "lab3-3f42a.firebasestorage.app",
  messagingSenderId: "439891698702",
  appId: "1:439891698702:web:11eaa671989bea1113c85f",
  measurementId: "G-3X3EV0562X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);