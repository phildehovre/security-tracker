// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { getFirestore, collection, addDoc } from "firebase/firestore";

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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app)

const provider = new GoogleAuthProvider()

export const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((res) => {
        const { displayName, email, photoURL } = res.user
        console.log('creating user')
        createUser(displayName, email, photoURL)
        localStorage.setItem('isAuth', true)

    }).catch((err) => {
        console.log(err)
    });
};

const createUser = async (name, email, profilePic) => {
    await addDoc(collection(db, "users"), { name, email, profilePic });
}

// const analytics = getAnalytics(app);