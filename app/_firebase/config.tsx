
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "@firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCETJ6S9ywc8ZRoKHhD1mAOWFKyTmKeUM4",
  authDomain: "next-auth-379f4.firebaseapp.com",
  projectId: "next-auth-379f4",
  storageBucket: "next-auth-379f4.appspot.com",
  messagingSenderId: "420247154662",
  appId: "1:420247154662:web:0813689e72d54b65f6f027",
  measurementId: "G-FPWFJK6M7Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
