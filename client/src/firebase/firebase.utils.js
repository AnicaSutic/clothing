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

export const createUserProfileDoc = async (userAuth, additionalData) => {
  if (!userAuth) return; // if there is no user exit
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  // to know if we stpred user object or not in database
  const spanShot = await userRef.get();

  // if not exist create it
  if (!spanShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      // create data for user
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const convertCollectionsSnapshotToMap = collections => {
  const tranformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();

    // add route name in every collection doc, we dont have it in our database so here we add it
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id, // get id of stored object
      title,
      items
    };
  });

  // hats = hats collection
  // jackets = jackets collection
  return tranformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

// just to add data to database through program

// export const addCollectionsAndDoc = async (collectionKey, objectsToAdd) => {
//   console.log("usao")
//   const collectionRef = firestore.collection(collectionKey);
//   const batch = firestore.batch();
//   objectsToAdd.forEach(obj => {
//     const newDocRef = collectionRef.doc(); // new doc ref empty
//     // set value, set obj to out ref
//     batch.set(newDocRef,obj)
//   });

//   // promise, void value
//   return await batch.commit();
// }

// resolve to current user value and return promise if there is not userAuth return null and reject or catch error
export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject)
  })
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
//alwaus show prompt dialog when click button
googleProvider.setCustomParameters({ prompt: "select_account" });

// sign in with that provider
// than enable in firebase app sign in with google
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);
export default firebase;
