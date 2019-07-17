import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyDazSwftErgVqt1GG__cUosrEEUaSEdnJE",
    authDomain: "clothing-db-2a12a.firebaseapp.com",
    databaseURL: "https://clothing-db-2a12a.firebaseio.com",
    projectId: "clothing-db-2a12a",
    storageBucket: "",
    messagingSenderId: "117285361868",
    appId: "1:117285361868:web:65c4ee5e137fd33d"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
//alwaus show prompt dialog when click button
provider.setCustomParameters({ prompt: 'select_account' });

// sign in with that provider
// than enable in firebase app sign in with google
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
