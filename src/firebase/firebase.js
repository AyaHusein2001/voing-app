// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import { getFirestore, collection, getDocs,getDoc, doc, updateDoc, increment,Timestamp,addDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDl5BC8MNuviOx5r5_4u0WybK661i47JHY",
  authDomain: "voting-app-dc7d6.firebaseapp.com",
  projectId: "voting-app-dc7d6",
  storageBucket: "voting-app-dc7d6.firebasestorage.app",
  messagingSenderId: "877895346247",
  appId: "1:877895346247:web:d7af3b7a2ff7b983772962"
};

// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, collection, getDocs, doc, updateDoc, increment,app,auth,Timestamp,addDoc,getDoc };