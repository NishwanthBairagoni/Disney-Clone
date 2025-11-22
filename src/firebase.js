// firebase.js
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

// Your Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJtShZKkV5QlwGXSIa2Z6rnxU51grKzZ8",
  authDomain: "disneyclone-e84a5.firebaseapp.com",
  projectId: "disneyclone-e84a5",
  storageBucket: "disneyclone-e84a5.firebasestorage.app",
  messagingSenderId: "883985040400",
  appId: "1:883985040400:web:ef4c4f1e5147365adff695",
  measurementId: "G-5S3S82TW1N"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Firebase services
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();
const storage = firebase.storage();

export { auth, provider, db, storage };
export default db;
