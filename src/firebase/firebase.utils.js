import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBtoERD6O5Jgvv8eNItnb08io8wBE8MO9Y',
  authDomain: 'react-shop-d6689.firebaseapp.com',
  databaseURL: 'https://react-shop-d6689.firebaseio.com',
  projectId: 'react-shop-d6689',
  storageBucket: 'react-shop-d6689.appspot.com',
  messagingSenderId: '218839344307',
  appId: '1:218839344307:web:85e243890383c6dbdfbcc6',
  measurementId: 'G-9E3YZBDC42',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfileDocument = async (user, additionalData) => {
  if (!user) return null;

  const { uid, email, displayName } = user;

  const userRef = firestore.doc(`/users/${uid}`);
  const snapShot = await userRef.get();
  const { exist } = snapShot;

  if (!exist) {
    const createdAt = new Date();

    try {
      await userRef.set({
        createdAt,
        email,
        displayName,
        ...additionalData,
      });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error creating user:', error);
    }
  }

  return userRef;
};

export const addCollectionsAndDocuments = (collectionKey, documentsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();

  documentsToAdd.forEach((obj) => {
    const docRef = collectionRef.doc();
    batch.set(docRef, obj);
  });

  return batch.commit();
};

export const parseCollections = (collections) => collections.reduce((collectionMap, collection) => {
  const { title, items } = collection.data();
  const lowerTitle = title.toLowerCase();

  const parsedCollection = {
    id: collection.id,
    routeName: encodeURI(lowerTitle),
    items,
    title,
  };

  return {
    ...collectionMap,
    [lowerTitle]: parsedCollection,
  };
}, {});

export default firebase;
