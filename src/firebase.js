import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBGU4p29XE84ZTaCjWQBzZKwlZG04ZfPAw",
    authDomain: "signup-b79e1.firebaseapp.com",
    projectId: "signup-b79e1",
    storageBucket: "signup-b79e1.appspot.com",
    messagingSenderId: "227226880206",
    appId: "1:227226880206:web:cc5d093e02ec1219e7a89f"
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)