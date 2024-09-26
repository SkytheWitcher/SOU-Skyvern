// src/firestoreConfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB4y9aQfUyKFp9z3YhUJIKBJ5m3EJ8zdz0",
    authDomain: "souskyvern.firebaseapp.com",
    projectId: "souskyvern",
    storageBucket: "souskyvern.appspot.com",
    messagingSenderId: "502795805214",
    appId: "1:502795805214:web:e3d92a8b73c2e89c3d840f"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };