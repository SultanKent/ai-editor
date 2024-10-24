// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDWnOjs79wwe1SuZ4GtPS84J8MZnO3_QO8",
    authDomain: "ai-editor-5ad53.firebaseapp.com",
    projectId: "ai-editor-5ad53",
    storageBucket: "ai-editor-5ad53.appspot.com",
    messagingSenderId: "823221461878",
    appId: "1:823221461878:web:1e635523327b28c6649057",
    measurementId: "G-6F2VD0CECJ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword };
