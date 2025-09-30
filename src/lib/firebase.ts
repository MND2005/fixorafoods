// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore, Firestore } from "firebase/firestore";
import { getAuth, Auth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};

// Validate required environment variables in development
if (process.env.NODE_ENV !== 'production') {
  const requiredEnvVars = [
    'NEXT_PUBLIC_FIREBASE_API_KEY',
    'NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN',
    'NEXT_PUBLIC_FIREBASE_PROJECT_ID',
    'NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET',
    'NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID',
    'NEXT_PUBLIC_FIREBASE_APP_ID'
  ];
  
  const missingEnvVars = requiredEnvVars.filter(envVar => !process.env[envVar]);
  if (missingEnvVars.length > 0) {
    console.warn('Missing Firebase environment variables:', missingEnvVars);
  }
}

// Initialize Firebase with better error handling
let app;
let db: Firestore | null = null;
let auth: Auth | null = null;

try {
  // Only initialize if we have a valid config and aren't already initialized
  const hasValidConfig = firebaseConfig.apiKey && firebaseConfig.apiKey !== 'undefined';
  
  if (hasValidConfig) {
    if (!getApps().length) {
      app = initializeApp(firebaseConfig);
    } else {
      app = getApp();
    }
    
    // Initialize services only if app was successfully created
    if (app) {
      try {
        db = getFirestore(app);
      } catch (firestoreError) {
        console.error("Firestore initialization error:", firestoreError);
      }
      
      try {
        auth = getAuth(app);
      } catch (authError) {
        console.error("Firebase Auth initialization error:", authError);
      }
    }
  } else {
    console.warn("Firebase config not found or invalid. Skipping Firebase initialization.");
  }
} catch (error) {
  console.error("Firebase initialization error:", error);
}

export { db, auth };