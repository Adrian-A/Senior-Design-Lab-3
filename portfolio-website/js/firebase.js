// Firebase v8 compatibility initialization (used by the app's inline script tags)
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyA8zkx6kq8RmZA92CC4oVbeNySBB2jKrpk",
  authDomain: "lab3-3f42a.firebaseapp.com",
  projectId: "lab3-3f42a",
  storageBucket: "lab3-3f42a.firebasestorage.app",
  messagingSenderId: "439891698702",
  appId: "1:439891698702:web:11eaa671989bea1113c85f",
  measurementId: "G-3X3EV0562X"
};

// Initialize Firebase (v8 style). This file is loaded after the v8 CDN scripts.
if (typeof firebase !== 'undefined' && !firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Expose a global `db` variable pointing to Firestore for the rest of the app.
var db = firebase.firestore();