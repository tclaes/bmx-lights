import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Get a Firestore instance
const fb = firebase.initializeApp({
  apiKey: "",
  authDomain: "bmx-tracks.firebaseapp.com",
  projectId: "bmx-tracks"
});

export const db = fb.firestore();
export const auth = fb.auth();
