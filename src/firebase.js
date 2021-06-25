import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBwxUoYaCt0kZeHyhNy0ytf5K5_inQuEW8",
  authDomain: "instagram-clone-61f36.firebaseapp.com",
  databaseURL:
    "https://instagram-clone-61f36-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "instagram-clone-61f36",
  storageBucket: "instagram-clone-61f36.appspot.com",
  messagingSenderId: "658876106433",
  appId: "1:658876106433:web:b03a94135a4ebaf7f67640",
  measurementId: "G-6VBMEE54HK",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };