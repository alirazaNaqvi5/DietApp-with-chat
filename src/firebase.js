import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5XLNeqvU98cmq3YV4Pkvse78J_7LoE0g",
  authDomain: "nutrionist-12.firebaseapp.com",
  projectId: "nutrionist-12",
  storageBucket: "nutrionist-12.appspot.com",
  messagingSenderId: "71740275700",
  appId: "1:71740275700:web:0a41e8b9245d82086257a1",
  measurementId: "G-2MSWKJF818"
};

const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
export const db = getFirestore(app);