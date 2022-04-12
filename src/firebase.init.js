// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuJjnma0TcMLWVqX8NWIs_V9v53-o5rxA",
  authDomain: "hotel-management-auth.firebaseapp.com",
  projectId: "hotel-management-auth",
  storageBucket: "hotel-management-auth.appspot.com",
  messagingSenderId: "802267683170",
  appId: "1:802267683170:web:7fde17495f8a7cc96eb43b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;