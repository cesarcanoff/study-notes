import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyCLxpZB13SIf7EM41j0NXBljjMdbXMGhoM',
  authDomain: 'cloneinstagram-ce33e.firebaseapp.com',
  projectId: 'cloneinstagram-ce33e',
  storageBucket: 'cloneinstagram-ce33e.appspot.com',
  messagingSenderId: '85798576769',
  appId: '1:85798576769:web:899fb37d178b346d95e380',
  measurementId: 'G-21GPJCV3HX'
});

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const functions = firebase.functions();

export { db, auth, storage, functions }
