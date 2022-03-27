// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJespQnkMqtN1wNPi3SAqmNUXl-RuENls",
  authDomain: "family-tree-54eda.firebaseapp.com",
  projectId: "family-tree-54eda",
  storageBucket: "family-tree-54eda.appspot.com",
  messagingSenderId: "822339872466",
  appId: "1:822339872466:web:5760ea211e8c643261ef0b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;