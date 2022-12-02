// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxLCQOMQUqpzTn_ZKdmaqeHGXseniOZu4",
  authDomain: "posty-370218.firebaseapp.com",
  projectId: "posty-370218",
  storageBucket: "posty-370218.appspot.com",
  messagingSenderId: "648447908587",
  appId: "1:648447908587:web:1ae23b0ca08884f918bcae"
};

// Initialize Firebase
const Firebase = initializeApp(firebaseConfig);
const db = getFirestore(Firebase);
export default db;

/* import firebase from "firebase/app";
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAxLCQOMQUqpzTn_ZKdmaqeHGXseniOZu4",
    authDomain: "posty-370218.firebaseapp.com",
    projectId: "posty-370218",
    storageBucket: "posty-370218.appspot.com",
    messagingSenderId: "648447908587",
    appId: "1:648447908587:web:1ae23b0ca08884f918bcae"
};

const Firebase = firebase.initializeApp(firebaseConfig);
export default Firebase */