import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBY9RDtimtGwgGz6NovWdHILECZov0TJnc",
  authDomain: "crwn-db-ff7c5.firebaseapp.com",
  projectId: "crwn-db-ff7c5",
  storageBucket: "crwn-db-ff7c5.appspot.com",
  messagingSenderId: "279245244980",
  appId: "1:279245244980:web:6d234b2f2e20bc45331861",
  measurementId: "G-7YJJS7E5LM",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select-account" });

export const singInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
