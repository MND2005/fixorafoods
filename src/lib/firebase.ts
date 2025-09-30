// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore, Firestore } from "firebase/firestore";
import { getAuth, Auth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
let app;
try {
  if (!getApps().length) {
    app = initializeApp(firebaseConfig);
  } else {
    app = getApp();
  }
} catch (error) {
  console.error("Firebase initialization error:", error);
  // Fallback configuration for development
  app = initializeApp({
    apiKey: "fake-api-key-for-development-only",
    projectId: "fixorafood-dev",
  });
}

// Initialize Firestore
let db: Firestore | null;
try {
  db = getFirestore(app);
} catch (error) {
  console.error("Firestore initialization error:", error);
  db = null;
}

// Initialize Firebase Authentication and get a reference to the service
let auth: Auth | null;
try {
  auth = getAuth(app);
} catch (error) {
  console.error("Firebase Auth initialization error:", error);
  auth = null;
}

export { db, auth };