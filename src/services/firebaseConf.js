import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBquolnVVH9autwQYV-cne_yQiOKZZ6qA8",
    authDomain: "projetofirebase-f2060.firebaseapp.com",
    projectId: "projetofirebase-f2060",
    storageBucket: "projetofirebase-f2060.appspot.com",
    messagingSenderId: "582946324259",
    appId: "1:582946324259:web:13e3ecad361bf0b5fc1696"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db