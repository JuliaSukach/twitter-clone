//import firebase from "./firebase";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

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
// const db = app.firestore();

// const firebaseApp = firebase.initializeApp(firebaseConfig);

//const db = firebaseApp.firestore();
export default db;

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyAE9WQ_pqV26AwG8Q3OUeXX8vf4AE4tAZc",
//     authDomain: "twitter-clone-3a82e.firebaseapp.com",
//     projectId: "twitter-clone-3a82e",
//     storageBucket: "twitter-clone-3a82e.appspot.com",
//     messagingSenderId: "968252946814",
//     appId: "1:968252946814:web:68bec281c1994ad53e5b2f",
//     measurementId: "G-B2QJWMT158"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const db = app.firestore();
// export default db;