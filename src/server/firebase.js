// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import {getAuth} from "firebase/auth";

require("firebase/firestore");

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJPnpn6Mfll4eguxtUIO1CjlEi49-CNOs",
  authDomain: "classico-10a72.firebaseapp.com",
  projectId: "classico-10a72",
  storageBucket: "classico-10a72.appspot.com",
  messagingSenderId: "31593134568",
  appId: "1:31593134568:web:ae9222fbd5228cd2ac0c5d",
  measurementId: "G-8H2503M4FZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const analytics = getAnalytics(app);
const db = getFirestore(app);
export {db, auth, }
export default app; 