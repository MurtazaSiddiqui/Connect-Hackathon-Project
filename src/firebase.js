// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlN3iQXtLA6m_B2oh_wqr9B-rPF0msI7o",
  authDomain: "admindashboard-846b9.firebaseapp.com",
  projectId: "admindashboard-846b9",
  storageBucket: "admindashboard-846b9.firebasestorage.app",
  messagingSenderId: "294497180864",
  appId: "1:294497180864:web:8ccf56a9297e48c4f06125",
  measurementId: "G-TTQTLT97JY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const db = getFirestore(app);
export { auth }; 
