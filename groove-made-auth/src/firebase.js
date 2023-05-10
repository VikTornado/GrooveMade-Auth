// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDmysLtIzvOJ4Rg-kJaJoHEG2epJ08CypA",
    authDomain: "auth-98be1.firebaseapp.com",
    projectId: "auth-98be1",
    storageBucket: "auth-98be1.appspot.com",
    messagingSenderId: "550554785736",
    appId: "1:550554785736:web:57a19bf1d75164f21512fd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);