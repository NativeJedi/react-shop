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

export default firebase;
