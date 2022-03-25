import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyAfmXZlwRyTrRxPM_aJTy5m6GGt13THsWQ",
  authDomain: "psh-react-project.firebaseapp.com",
  projectId: "psh-react-project",
  storageBucket: "psh-react-project.appspot.com",
  messagingSenderId: "143451864222",
  appId: "1:143451864222:web:83a91561f61b8975314f8f",
};

const firestore = initializeApp(firebaseConfig);

// 필요한 곳에서 사용할 수 있도록 내보내기
export { firestore };
