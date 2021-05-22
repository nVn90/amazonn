import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNeW3N_lzMcx6AwkLL-A-_opKnUEQdq2o",
  authDomain: "n-9536e.firebaseapp.com",
  databaseURL: "https://n-9536e-default-rtdb.firebaseio.com",
  projectId: "n-9536e",
  storageBucket: "n-9536e.appspot.com",
  messagingSenderId: "1095712412388",
  appId: "1:1095712412388:web:dd2ca655009f3d77b992f1",
  measurementId: "G-EVBX8DVDLE",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
