import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5ZFvcxEZbUmCvepAfR4T75JglTUd27ZE",
  authDomain: "hookoapp.firebaseapp.com",
  databaseURL: "https://hookoapp-default-rtdb.firebaseio.com",
  projectId: "hookoapp",
  storageBucket: "hookoapp.appspot.com",
  messagingSenderId: "268125520892",
  appId: "1:268125520892:web:e4329ecbcb4ea86ec36879",
  measurementId: "G-D2NTG7PSDL"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const oauth = firebase.auth()
const db = firebase.firestore()

export  { oauth, db};
