import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCRqn7D0tjzrsFnBq7ppMtOT2Y4cedQ3bU",
  authDomain: "twitter-clone-f7fd7.firebaseapp.com",
  projectId: "twitter-clone-f7fd7",
  storageBucket: "twitter-clone-f7fd7.firebasestorage.app",
  messagingSenderId: "913552074060",
  appId: "1:913552074060:web:394cacfcfc94c560189be9",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export { db, collection, addDoc, getDocs };
