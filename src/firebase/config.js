// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIg7hJc9H0MV7_hiLbmkprhcrP-0xyZwA",
  authDomain: "proyectoreact-2026.firebaseapp.com",
  projectId: "proyectoreact-2026",
  storageBucket: "proyectoreact-2026.firebasestorage.app",
  messagingSenderId: "528383254235",
  appId: "1:528383254235:web:18958632d406b50790f6fe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

//para cuando veamos el login
const auth = getAuth(app);

export { db, auth };
