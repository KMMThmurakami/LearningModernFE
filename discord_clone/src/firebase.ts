// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFxufmyp-GoZBRvGlKHZk2cZPOyn9sthQ",
  authDomain: "discord-clone-b4a40.firebaseapp.com",
  projectId: "discord-clone-b4a40",
  storageBucket: "discord-clone-b4a40.appspot.com",
  messagingSenderId: "702819002135",
  appId: "1:702819002135:web:388c9d5d8ac3a56021b952"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, db };
