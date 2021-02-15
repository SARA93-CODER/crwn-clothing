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

/* storing the userAuth in the database using firestore library: if the user has already valid account then return nothing, else store the new user account in the database */

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users / ${userAuth.uid}`);
  const snapShot = await userRef.get();
  {
    /* creating a snapshot if there is no one/ pulling the created user profile in the firestore using the documentRef not the snapShot  */
  if (!snapShot.exists) {
    // we want to store the name & email of the user by getting these info from the userAuth object
    const { displayName, email } = userAuth;
    // to know when the document is created in the database we use new date function
    const createdAt = new Date();
    /* if there is no user profile stored in the database, then create one including the informatotion below which are from the userAuth object */
  }
    try {
      // this is async proccess because we send a request to set/create  an object with the info below, note: we use userRef not the user snapShot
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
      }
    //we return userRef object at the end in case we need it in other places
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

/* setting the google authentication utility by geting the googlAuthProvider class from the auth library,
then we trigger the google popup to authenticate the user.*/

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const singInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
