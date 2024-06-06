import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGE_SENDER_ID,
  appId: import.meta.env.VITE_APPID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID,
};

// initializeApp
const app = initializeApp(firebaseConfig);

// initializeAuth
const auth = getAuth(app);

// Cloud storage
const storage = getStorage();

// Firestore database
const db = getFirestore();
// console.log("firestore firebase db", db);
// console.log("firestore storage", storage);

export { auth, storage, db };
