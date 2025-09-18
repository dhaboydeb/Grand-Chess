
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBSE4AMENt27aze9sWsU0xyciCMwqa2Ifc",
  authDomain: "grandchess-5ed96.firebaseapp.com",
  projectId: "grandchess-5ed96",
  storageBucket: "grandchess-5ed96.firebasestorage.app",
  messagingSenderId: "186451323671",
  appId: "1:186451323671:web:ff2f2a003a50d6ca9da552"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const auth = getAuth(app)