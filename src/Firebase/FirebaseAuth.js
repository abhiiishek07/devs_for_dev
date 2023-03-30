import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyCkKH17a7RIVpWeocirKgF32RMerJj_lYc",
//   authDomain: "devs-for-dev.firebaseapp.com",
//   projectId: "devs-for-dev",
//   storageBucket: "devs-for-dev.appspot.com",
//   messagingSenderId: "404910649536",
//   appId: "1:404910649536:web:2dbb4f49ffb535fbefbd25",
// };
const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_API_KEY}`,
  authDomain: `${process.env.REACT_APP_AUTH_DOMAIN}`,
  projectId: `${process.env.REACT_APP_PROJECT_ID}`,
  storageBucket: `${process.env.REACT_APP_STORAGE_BUCKET}`,
  messagingSenderId: `${process.env.REACT_APP_MESSENGER_ID}`,
  appId: `${process.env.REACT_APP_APP_ID}`,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider);
};
export const signOutFromGoogle = () => {
  signOut(auth, provider);
};
// export const signInAsGuest = () => {
//   signInAnonymously(auth, provider);
// };
export const db = getFirestore(app);
