// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";


const firebaseConfig = {
    apiKey: "AIzaSyAUIcxXpbyWTn6RpdWiw6Fx4762hx6OdTU",
    authDomain: "sosadvogado-21558.firebaseapp.com",
    projectId: "sosadvogado-21558",
    storageBucket: "sosadvogado-21558.appspot.com",
    messagingSenderId: "1067139211695",
    appId: "1:1067139211695:web:c19e6789418d120ec00f5a",
    measurementId: "G-W12PTP5P78"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database


