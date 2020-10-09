import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDB_DLOr0mBejvhUOZagZo7Z_3HgadEWK8",
  authDomain: "clone-challenge-a7b75.firebaseapp.com",
  databaseURL: "https://clone-challenge-a7b75.firebaseio.com",
  projectId: "clone-challenge-a7b75",
  storageBucket: "clone-challenge-a7b75.appspot.com",
  messagingSenderId: "970523870455",
  appId: "1:970523870455:web:c66b3424389de3e1ddfff2",
  measurementId: "G-3CFTK00YHE"
};

// initialize firebase app
const firebaseApp = firebase.initializeApp(firebaseConfig);

// initialize database
const db = firebaseApp.firestore();
// authentication
const auth = firebase.auth();

export { db, auth };