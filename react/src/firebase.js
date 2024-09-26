import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
   apiKey: "AIzaSyDRLJifMu25M7hVv2S22IvxGyG9UB3ljzQ",
  authDomain:  "villa-a20f7.firebaseapp.com",
  projectId: "villa-a20f7",
  storageBucket: "villa-a20f7..appspot.com",
  messagingSenderId: "11539125183",
  appId: "1:11539125183:web:56cf87802ed927e4de070a"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
