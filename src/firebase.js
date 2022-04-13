import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut
} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDB4FWsmJeNB-vLL4XnEOXu-EAfjTSIfX0",
    authDomain: "netflix-clone-c586f.firebaseapp.com",
    projectId: "netflix-clone-c586f",
    storageBucket: "netflix-clone-c586f.appspot.com",
    messagingSenderId: "35254746768",
    appId: "1:35254746768:web:8dc1521d57bfa3430f6215"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

export {
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut
};
export default db;