// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTVzKvChm-ovYndiJkuvxvy8HZnA8tNYI",
  authDomain: "authentication-with-cont-418e5.firebaseapp.com",
  projectId: "authentication-with-cont-418e5",
  storageBucket: "authentication-with-cont-418e5.firebasestorage.app",
  messagingSenderId: "319122607597",
  appId: "1:319122607597:web:0cb4c0e99654370c83ebe4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);