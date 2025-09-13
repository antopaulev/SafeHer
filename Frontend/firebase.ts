// firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your Firebase config (copied from Firebase console)
const firebaseConfig = {
  apiKey: "AIzaSyCMEnLLggAEQi-7_X6uBlE_cME-aF0_XiY",
  authDomain: "safeher-e2c14.firebaseapp.com",
  projectId: "safeher-e2c14",
  storageBucket: "safeher-e2c14.firebasestorage.app",
  messagingSenderId: "789961945953",
  appId: "1:789961945953:web:473b11aadaf646c1588b20",
  measurementId: "G-K0H7QHHYBY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase services you will use
export const auth = getAuth(app);
export const db = getFirestore(app);
