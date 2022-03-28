import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyAfmXZlwRyTrRxPM_aJTy5m6GGt13THsWQ",
  authDomain: "psh-react-project.firebaseapp.com",
  projectId: "psh-react-project",
  storageBucket: "psh-react-project.appspot.com",
  messagingSenderId: "143451864222",
  appId: "1:143451864222:web:83a91561f61b8975314f8f",
});

const db = getFirestore();

export { db };
