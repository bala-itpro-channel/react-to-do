// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGkwUjB80rWXHHs5rVvSdOFx4fi_HhFHg",
  authDomain: "demoproject-16a23.firebaseapp.com",
  databaseURL: "https://demoproject-16a23-default-rtdb.firebaseio.com",
  projectId: "demoproject-16a23",
  storageBucket: "demoproject-16a23.appspot.com",
  messagingSenderId: "673240951663",
  appId: "1:673240951663:web:dce1e1bdcb9159fd21d69a",
  measurementId: "G-J4CTT6639D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export default db;