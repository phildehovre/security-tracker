// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import { getFirestore, collection, addDoc, getDoc } from "firebase/firestore";
import { uuidv4 } from "@firebase/util";
import { createUserWithEmailAndPassword } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAMqICOpHjXjCiZNCljdFQ_O6vAr6WSnBA",
    authDomain: "myfi-451b5.firebaseapp.com",
    projectId: "myfi-451b5",
    storageBucket: "myfi-451b5.appspot.com",
    messagingSenderId: "58327184329",
    appId: "1:58327184329:web:2f30788f1d3455c092ee18",
    measurementId: "G-9QHF3GR7CE"
};
// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//     authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//     projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINS_SENDER_ID,
//     appId: process.env.REACT_APP_FIREBASE_APP_ID,
//     measurementId: process.env.REACT_APP_FIREBASE_MEASURMENT_ID
// };

console.log(process.env.REACT_APP_CUSTOM)

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app)

const provider = new GoogleAuthProvider()

export const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((res) => {
        const { displayName, email, photoURL } = res.user
        console.log('creating user')
        // createUser(uuidv4(), displayName, email, photoURL)
        localStorage.setItem('isAuth', true)

    }).catch((err) => {
        console.log(err)
    });
};

export const useSignOut = () => {
    signOut(auth).then(() => {
        alert('User sucessfully signed out')
        localStorage.setItem('isAuth', false)
    }).catch((err) => {
        console.log(err)
    })
}

export const createUser = (auth, email, password, callback) => {
    createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
        callback(userCredential.user)
    }).catch((err) => {
        console.log(err)
    })
}

// const createUser = async (id, name, email, profilePic) => {
//     await addDoc(collection(db, "users", id), { name, email, profilePic });
// }
const getUser = async (id) => {
    await getDoc(collection(db, "users", id));
}

// const analytics = getAnalytics(app);