//import firebase from "./firebase";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword,
    sendEmailVerification, signInWithEmailAndPassword, updateProfile } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAE9WQ_pqV26AwG8Q3OUeXX8vf4AE4tAZc",
    authDomain: "twitter-clone-3a82e.firebaseapp.com",
    projectId: "twitter-clone-3a82e",
    storageBucket: "twitter-clone-3a82e.appspot.com",
    messagingSenderId: "968252946814",
    appId: "1:968252946814:web:68bec281c1994ad53e5b2f",
    measurementId: "G-B2QJWMT158"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
// Initialize Firebase Auth provider
const provider = new GoogleAuthProvider();

// whenever a user interacts with the provider, we force them to select an account
provider.setCustomParameters({
    prompt : "select_account "
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signUpWithEmail = async (email, password, username) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        sendEmailVerification(userCredential.user)
        updateProfile(auth.currentUser, {
            displayName: username
        })
        return userCredential
    } catch (error) {
        console.error('Error signing up:', error.message);
    }
}

export const signInExistingUser = async (email, password) => {
    try {
        const userCredential = signInWithEmailAndPassword(auth, email, password)
        return userCredential
    } catch (error) {
        console.error('Error signing up:', error.message);
    }
}

export default db;
