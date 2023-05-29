// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCTbbKtcF0inP4PhA2q9aeiDqvGWvvVn-o",
  authDomain: "gary-eisen-project.firebaseapp.com",
  projectId: "gary-eisen-project",
  storageBucket: "gary-eisen-project.appspot.com",
  messagingSenderId: "529514491672",
  appId: "1:529514491672:web:f85e35ed12dc49c6dc386d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
