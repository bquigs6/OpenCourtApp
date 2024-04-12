// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAO7MpAPJ2H1ls0kR6GMMOp4zaMEfcj7jM",
  authDomain: "opencourt-8e06b.firebaseapp.com",
  projectId: "opencourt-8e06b",
  storageBucket: "opencourt-8e06b.appspot.com",
  messagingSenderId: "951347884767",
  appId: "1:951347884767:web:70879013fc88a35049af6a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getAuth (app)