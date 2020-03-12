import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Get a Firestore instance
const fb = firebase.initializeApp({
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID
});

export const db = fb.firestore();
export const auth = fb.auth();
